//create the quiz questions
let questions = [
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

function getQuestions() {
    document.getElementById('questions').style.display = 'block';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('QstSt').setAttribute('class', 'active');
}
