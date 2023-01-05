var questions = new XMLHttpRequest();
questions.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        questions = JSON.parse(this.responseText);
    }
};
questions.open('POST', '../controller/qu.php', false);
questions.send();

var answers = new XMLHttpRequest();
answers.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        answers = JSON.parse(this.responseText);
    }
};

answers.open('POST', '../controller/an.php', false);
answers.send();

const nextButton = document.querySelector('.next');
const buttons = document.querySelectorAll('.choice');
var correct = 0;
var answer;
var user_answers = [];
var Timer;
var randQuestions = questions;

// randomize questions
randQuestions.sort(function () {
    return 0.5 - Math.random();
});

// question counter
function countQuest() {
    document.getElementById('questionNumber').innerHTML = 'Question ' + (index + 1) + ' / ' + questions.length;
}

var index = 0;
var ind = 0;
var id = 0;

// fetch questions and show them
function fetchQuestion(randQuestions) {
    if (index < questions.length) {
        document.getElementById('questionn').innerHTML = randQuestions[index].question;
        document.getElementById('answer1').innerText = randQuestions[index].answers[ind];
        document.getElementById('answer2').innerText = randQuestions[index].answers[ind + 1];
        document.getElementById('answer3').innerText = randQuestions[index].answers[ind + 2];
        document.getElementById('answer4').innerText = randQuestions[index].answers[ind + 3];
        document.getElementById('answer1').dataset.answer = randQuestions[index].answers[ind];
        document.getElementById('answer2').dataset.answer = randQuestions[index].answers[ind + 1];
        document.getElementById('answer3').dataset.answer = randQuestions[index].answers[ind + 2];
        document.getElementById('answer4').dataset.answer = randQuestions[index].answers[ind + 3];
        document.getElementById('questionn').dataset.id = randQuestions[index].id;
    }
    chosenAnswer();
    countdown();
    countQuest();
    const nextButton = document.querySelector('.next');
    nextButton.onclick = function () {
        if (index < questions.length) {
            saveAnswers(answer, id);
            index++;
            fetchQuestion(randQuestions);
            clearInterval(Timer);
            countdown();
            buttons.forEach(function (button) {
                button.classList.remove('chosen');
            });
            answer = '';
            id = '';
            check(index);
        }
    };
}

// to hide rules and show questions
function getQuestions() {
    document.getElementById('questions').style.display = 'block';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('QstSt').setAttribute('class', 'active');
    fetchQuestion(randQuestions);
}

function saveAnswers(answer, id) {
    user_answers[id - 1] = answer;
}

function check(count) {
    if (count == questions.length) {
        for (let i = 0; i < questions.length; i++) {
            if (user_answers[i] == answers[i].answer) {
                correct++;
            }
        }
        getResults(correct);
    }
}

// to display the result of the quizz
function getResults(correct) {
    document.getElementById('questions').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('RsltSt').setAttribute('class', 'active');
    document.getElementById('correct').innerText = correct + ' correct out of /' + questions.length;
    document.getElementById('wrong').innerText = questions.length - correct + ' Wrong answers';
    document.getElementById('score').innerText = (correct / questions.length) * 100 + '%  Success Rate';
    showAnswers();
}

// to make the choosen answer green
function chosenAnswer() {
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            buttons.forEach(function (button) {
                button.classList.remove('chosen');
            });
            button.classList.add('chosen');
            answer = button.dataset.answer;
            if (answer == undefined) {
                answer = ' ';
            }
            id = document.getElementById('questionn').dataset.id;
        });
    });
}

// function for countdown timer
function countdown() {
    var timeleft = 30;
    clearInterval(Timer);
    Timer = setInterval(function () {
        document.getElementById('countdown').innerHTML = timeleft + ' seconds remaining';
        timeleft -= 1;
        if (timeleft === -1) {
            document.getElementById('countdown').innerHTML = 'Next Question';
            clearInterval(Timer);

            nextButton.click();
        }
    }, 1000);
}

// show answers when questions are finished
function showAnswers() {
    let questionS = questions.sort(function (a, b) {
        return a.id - b.id;
    });
    // console.log(questions);
    // console.log(questionS);
    // console.log('------------------');
    // console.log(user_answers);
    // console.log('----------------------');
    // console.log(answers);

    for (let i = 0; i < questions.length; i++) {
        if (user_answers[i] != answers[i].answer) {
            document.querySelector('.justify').innerHTML += `
                <div class="question" id="question">Question : ${questions[questions[i].id - 1].question}</div>
                <section class="answers">
                    <div  class="option" id="A${i}">${questions[questions[i].id - 1].answers[ind]}</div>
                    <div class="option" id="B${i}">${questions[questions[i].id - 1].answers[ind + 1]}</div>
                    <div class="option" id="C${i}">${questions[questions[i].id - 1].answers[ind + 2]}</div>
                    <div class="option" id="D${i}">${questions[questions[i].id - 1].answers[ind + 3]}</div>
                    <div class=" justification" id="justif">Justification : ${answers[i].justify}</div>
                </section>
                `;
        } else if (correct == questions.length) {
            document.querySelector('.justify').innerHTML = '<h2 class="text-info centered"> Congrats, you have answered all the questions correctly </h2>';
        }
    }
    for (let i = 0; i < questions.length; i++) {
        if (user_answers[i] != answers[i].answer) {
            for (let j = 0; j < questions.length; j++) {
                if (user_answers[i] == document.querySelector(`#A${i}`).innerText) {
                    document.querySelector(`#A${i}`).setAttribute('class', 'option false');
                } else if (user_answers[i] == document.querySelector(`#B${i}`).innerText) {
                    document.querySelector(`#B${i}`).setAttribute('class', 'option false');
                } else if (user_answers[i] == document.querySelector(`#C${i}`).innerText) {
                    document.querySelector(`#C${i}`).setAttribute('class', 'option false');
                } else if (user_answers[i] == document.querySelector(`#D${i}`).innerText) {
                    document.querySelector(`#D${i}`).setAttribute('class', 'option false');
                }

                if (answers[j].answer == document.querySelector(`#A${i}`).innerText) {
                    document.querySelector(`#A${i}`).setAttribute('class', 'option true');
                } else if (answers[j].answer == document.querySelector(`#B${i}`).innerText) {
                    document.querySelector(`#B${i}`).setAttribute('class', 'option true');
                } else if (answers[j].answer == document.querySelector(`#C${i}`).innerText) {
                    document.querySelector(`#C${i}`).setAttribute('class', 'option true');
                } else if (answers[j].answer == document.querySelector(`#D${i}`).innerText) {
                    document.querySelector(`#D${i}`).setAttribute('class', 'option true');
                }
            }
        }
    }
}
