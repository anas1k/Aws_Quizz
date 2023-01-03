//create the quiz questions
var questions = [
    {
        question: 'Why is AWS more economical than traditional data centers for applications with varying compute workloads?',
        A: 'Amazon EC2 costs are billed on a monthly basis',
        B: 'Users retain full administrative access to their Amazon EC2 instances.',
        C: 'Amazon EC2 instances can be launched on demand when needed',
        D: 'Users can permanently run enough instances to handle peak workloads.',
        correct: 'C',
        justification:
            'The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load',
    },
    {
        question: 'Which AWS service would simplify the migration of a database to AWS?',
        A: 'AWS Storage Gateway',
        B: 'AWS Database Migration Service (AWS DMS)',
        C: 'Amazon EC2',
        D: 'Amazon AppStream 2.0',
        correct: 'B',
        justification:
            'AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.',
    },
    {
        question: ' Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?',
        A: 'AWS Config',
        B: 'AWS OpsWorks',
        C: 'AWS SDK',
        D: 'AWS Marketplace',
        correct: 'D',
        justification: 'AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS.',
    },
    {
        question: 'Which AWS networking service enables a company to create a virtual network within AWS?',
        A: 'AWS Config',
        B: 'Amazon Route 53',
        C: 'AWS Direct Connect',
        D: 'Amazon Virtual Private Cloud (Amazon VPC)',
        correct: 'D',
        justification: 'Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.',
    },
    {
        question: 'Which of the following is an AWS responsibility under the AWS shared responsibility model?',
        A: 'Configuring third-party applications',
        B: 'Maintaining physical hardware',
        C: 'Securing application access and data',
        D: 'Managing guest operating systems',
        correct: 'B',
        justification: 'Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.',
    },
    {
        question: 'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?',
        A: 'AWS Regions',
        B: 'Edge locations',
        C: 'Availability Zones',
        D: 'Virtual Private Cloud (VPC)',
        correct: 'B',
        justification: 'To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide. ',
    },
    {
        question: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
        A: 'Use Amazon Cloud Directory',
        B: 'Audit AWS Identity and Access Management (IAM) roles',
        C: 'Enable multi-factor authentication',
        D: 'Enable AWS CloudTrail',
        correct: 'C',
        justification:
            'Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources.',
    },
    {
        question: 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?',
        A: 'AWS Trusted Advisor',
        B: 'AWS CloudTrail',
        C: 'AWS X-Ray',
        D: 'AWS Identity and Access Management (AWS IAM)',
        correct: 'B',
        justification:
            'AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.',
    },
    {
        question: 'Which service would be used to send alerts based on Amazon CloudWatch alarms?',
        A: 'Amazon Simple Notification Service (Amazon SNS)',
        B: 'AWS CloudTrail',
        C: 'AWS Trusted Advisor',
        D: 'Amazon Route 53',
        correct: 'A',
        justification:
            'Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries.',
    },
    {
        question: 'Where can a user find information about prohibited actions on the AWS infrastructure?',
        A: 'AWS Trusted Advisor',
        B: 'AWS Identity and Access Management (IAM)',
        C: 'AWS Billing Console',
        D: 'AWS Acceptable Use Policy',
        correct: 'D',
        justification: 'The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure. ',
    },
];

const nextButton = document.querySelector('.btn-primary');
var buttons = document.querySelectorAll('.card');
var correct = 0;
var answer;
var user_answers = [];
var downloadTimer;

// randomize questions
questions.sort(function () {
    return 0.5 - Math.random();
});

// question counter
function countQuest() {
    document.getElementById('questionNumber').innerHTML = 'Question ' + (index + 1) + ' of ' + questions.length;
}

var index = 0;

// fetch questions and show them
function fetchQuestion() {
    if (index < questions.length) {
        document.getElementById('questionn').innerHTML = questions[index].question;
        document.getElementById('answer1').innerText = questions[index].A;
        document.getElementById('answer2').innerText = questions[index].B;
        document.getElementById('answer3').innerText = questions[index].C;
        document.getElementById('answer4').innerText = questions[index].D;
    }
    chosenAnswer();
    countdown();
    countQuest();

    nextButton.onclick = function () {
        if (index < questions.length) {
            checkAnswer(index, answer);
            index++;
            fetchQuestion();
            clearInterval(downloadTimer);
            // call countdown timer
            countdown();
            buttons.forEach(function (button) {
                button.classList.remove('chosen');
            });
            answer = '';
            chosenAnswer();
            getResults();
        }
    };
}

// to hide rules and show questions
function getQuestions() {
    document.getElementById('questions').style.display = 'block';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('QstSt').setAttribute('class', 'active');
    fetchQuestion();
}

// to display the result of the quizz
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

// to make the choosen answer green
function chosenAnswer() {
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

// function to increment the correct answer
function checkAnswer(index, answer) {
    user_answers.push(answer);
    if (questions[index].correct === answer) {
        console.log('correct');
        correct++;
    }
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

// show answers when questions are finished
function showAnswers() {
    for (let i = 0; i < questions.length; i++) {
        if (user_answers[i] != questions[i].correct) {
            document.querySelector('.justify').innerHTML += `
                <div class="question" id="question">Question : ${questions[i].question}</div>
                <section class="answers">
                    <div  class="option" id="A${i}">${questions[i].A}</div>
                    <div class="option" id="B${i}">${questions[i].B}</div>
                    <div class="option" id="C${i}">${questions[i].C}</div>
                    <div class="option" id="D${i}">${questions[i].D}</div>
                    <div class=" justification" id="justif">Justification : ${questions[i].justification}</div>
                </section>
            `;
            if (user_answers[i] == 'A') {
                document.querySelector(`#A${i}`).setAttribute('class', 'option false');
            } else if (user_answers[i] == 'B') {
                document.querySelector(`#B${i}`).setAttribute('class', 'option false');
            } else if (user_answers[i] == 'C') {
                document.querySelector(`#C${i}`).setAttribute('class', 'option false');
            } else if (user_answers[i] == 'D') {
                document.querySelector(`#D${i}`).setAttribute('class', 'option false');
            }
            if (questions[i].correct == 'A') {
                document.querySelector(`#A${i}`).setAttribute('class', 'option true');
            } else if (questions[i].correct == 'B') {
                document.querySelector(`#B${i}`).setAttribute('class', 'option true');
            } else if (questions[i].correct == 'C') {
                document.querySelector(`#C${i}`).setAttribute('class', 'option true');
            } else if (questions[i].correct == 'D') {
                document.querySelector(`#D${i}`).setAttribute('class', 'option true');
            }
        }
    }
}
