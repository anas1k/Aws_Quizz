//create the quiz questions
var questions = [
    {
        question: 'Why is AWS more economical than traditional data centers for applications with varying compute workloads?',
        A: 'Amazon EC2 costs are billed on a monthly basis',
        B: 'Users retain full administrative access to their Amazon EC2 instances.',
        C: 'Amazon EC2 instances can be launched on demand when needed',
        D: 'Users can permanently run enough instances to handle peak workloads.',
        correct: 'C',
    },
    {
        question: 'Which AWS service would simplify the migration of a database to AWS?',
        A: 'AWS Storage Gateway',
        B: 'AWS Database Migration Service (AWS DMS)',
        C: 'Amazon EC2',
        D: 'Amazon AppStream 2.0',
        correct: 'B',
    },
    {
        question: ' Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?',
        A: 'AWS Config',
        B: 'AWS OpsWorks',
        C: 'AWS SDK',
        D: 'AWS Marketplace',
        correct: 'D',
    },
    {
        question: 'Which AWS networking service enables a company to create a virtual network within AWS?',
        A: 'AWS Config',
        B: 'Amazon Route 53',
        C: 'AWS Direct Connect',
        D: 'Amazon Virtual Private Cloud (Amazon VPC)',
        correct: 'D',
    },
    {
        question: 'Which of the following is an AWS responsibility under the AWS shared responsibility model?',
        A: 'Configuring third-party applications',
        B: 'Maintaining physical hardware',
        C: 'Securing application access and data',
        D: 'Managing guest operating systems',
        correct: 'B',
    },
    {
        question: 'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?',
        A: 'AWS Regions',
        B: 'Edge locations',
        C: 'Availability Zones',
        D: 'Virtual Private Cloud (VPC)',
        correct: 'B',
    },
    {
        question: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
        A: 'Use Amazon Cloud Directory',
        B: 'Audit AWS Identity and Access Management (IAM) roles',
        C: 'Enable multi-factor authentication',
        D: 'Enable AWS CloudTrail',
        correct: 'C',
    },
    {
        question: 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?',
        A: 'AWS Trusted Advisor',
        B: 'AWS CloudTrail',
        C: 'AWS X-Ray',
        D: 'AWS Identity and Access Management (AWS IAM)',
        correct: 'B',
    },
    {
        question: 'Which service would be used to send alerts based on Amazon CloudWatch alarms?',
        A: 'Amazon Simple Notification Service (Amazon SNS)',
        B: 'AWS CloudTrail',
        C: 'AWS Trusted Advisor',
        D: 'Amazon Route 53',
        correct: 'A',
    },
    {
        question: 'Where can a user find information about prohibited actions on the AWS infrastructure?',
        A: 'AWS Trusted Advisor',
        B: 'AWS Identity and Access Management (IAM)',
        C: 'AWS Billing Console',
        D: 'AWS Acceptable Use Policy',
        correct: 'D',
    },
];

const nextButton = document.querySelector('.btn-primary');
var buttons = document.querySelectorAll('.card');
var correct = 0;
var answer;
var user_answers = [];
var downloadTimer;

questions.sort(function () {
    return 0.5 - Math.random();
});

var index = 0;

function fetchQuestion() {
    if (index < questions.length) {
        document.getElementById('questionn').innerHTML = questions[index].question;
        document.getElementById('answer1').innerText = questions[index].A;
        document.getElementById('answer2').innerText = questions[index].B;
        document.getElementById('answer3').innerText = questions[index].C;
        document.getElementById('answer4').innerText = questions[index].D;
    }
    chosenAnswer();
    // call countdown timer
    countdown();

    nextButton.onclick = function () {
        if (index < questions.length) {
            checkAnswer(index, answer);
            index++;
            fetchQuestion();
            // clear the timer
            // clearInterval(timer);
            clearInterval(downloadTimer);
            // call countdown timer
            countdown();
            //remove the active class from the buttons
            buttons.forEach(function (button) {
                button.classList.remove('chosen');
            });
            answer = '';
            chosenAnswer();
            getResults();
        }
    };
}

function getQuestions() {
    document.getElementById('questions').style.display = 'block';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('QstSt').setAttribute('class', 'active');
    fetchQuestion();
}

function getResults() {
    if (index == questions.length) {
        document.getElementById('questions').style.display = 'none';
        document.getElementById('result').style.display = 'block';
        document.getElementById('RsltSt').setAttribute('class', 'active');
        document.getElementById('correct').innerText = correct + ' correct out of /' + questions.length;
        document.getElementById('wrong').innerText = questions.length - correct + ' Wrong answers';
        document.getElementById('score').innerText = (correct / questions.length) * 100 + '%  Success Rate';
        showAnswers();
    }
}

function chosenAnswer() {
    //add class active to the button that is clicked
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            buttons.forEach(function (button) {
                button.classList.remove('chosen');
            });
            button.classList.add('chosen');
            answer = button.dataset.answer;
        });
    });
}

function checkAnswer(index, answer) {
    user_answers.push(answer);
    if (questions[index].correct === answer) {
        console.log('correct');
        correct++;
        console.log(correct);
    } else {
        console.log(correct);
    }
    console.log(user_answers);
}

// function for countdown timer
function countdown() {
    var timeleft = 30;
    clearInterval(downloadTimer);
    downloadTimer = setInterval(function () {
        document.getElementById('countdown').innerHTML = timeleft + ' seconds remaining';
        timeleft -= 1;
        if (timeleft === -1) {
            document.getElementById('countdown').innerHTML = 'Next Question';
            clearInterval(downloadTimer);

            // getResults();
            nextButton.click();
        }
    }, 1000);
}

// show ansaers when questions are finished
function showAnswers() {
    for (let i = 0; i <= questions.length; i++) {
        document.getElementById('question').innerHTML = questions[i].question;
        document.getElementById('option1').innerText = questions[i].A;
        document.getElementById('option2').innerText = questions[i].B;
        document.getElementById('option3').innerText = questions[i].C;
        document.getElementById('option4').innerText = questions[i].D;
    }
}
