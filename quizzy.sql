-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 04, 2023 at 11:13 AM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quizzy`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer` text NOT NULL,
  `correct` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `question_id`, `answer`, `correct`) VALUES
(1, 1, 'Amazon EC2 costs are billed on a monthly basis.', 0),
(2, 1, 'Users retain full administrative access to their Amazon EC2 instances.', 0),
(3, 1, 'Amazon EC2 instances can be launched on demand when needed.', 1),
(4, 1, 'Users can permanently run enough instances to handle peak workloads.', 0),
(5, 2, 'AWS Storage Gateway', 0),
(6, 2, 'AWS Database Migration Service (AWS DMS)', 1),
(7, 2, 'Amazon EC2', 0),
(8, 2, 'Amazon AppStream 2.0', 0),
(9, 3, 'AWS Config', 0),
(10, 3, 'AWS OpsWorks', 0),
(11, 3, 'AWS SDK', 0),
(12, 3, 'AWS Marketplace', 1),
(13, 4, 'AWS Config', 0),
(14, 4, 'Amazon Route 53', 0),
(15, 4, 'AWS Direct Connect', 0),
(16, 4, 'Amazon Virtual Private Cloud (Amazon VPC)', 1),
(17, 5, 'Configuring third-party applications', 0),
(18, 5, 'Maintaining physical hardware ', 1),
(19, 5, 'Securing application access and data', 0),
(20, 5, 'Managing guest operating systems', 0),
(21, 6, 'AWS Regions', 0),
(22, 6, 'Edge locations', 1),
(23, 6, 'Availability Zones', 0),
(24, 6, 'Virtual Private Cloud (VPC)', 0),
(25, 7, 'Use Amazon Cloud Directory', 0),
(26, 7, 'Audit AWS Identity and Access Management (IAM) roles', 0),
(27, 7, 'Enable multi-factor authentication', 1),
(28, 7, 'Enable AWS CloudTrail', 0),
(29, 8, 'AWS Trusted Advisor', 0),
(30, 8, 'AWS CloudTrail', 1),
(31, 8, 'AWS X-Ray', 0),
(32, 8, 'AWS Identity and Access Management (AWS IAM)', 0),
(33, 9, 'Amazon Simple Notification Service (Amazon SNS)', 0),
(34, 9, 'AWS CloudTrail', 0),
(35, 9, 'AWS Trusted Advisor', 0),
(36, 9, 'Amazon Route 53', 1),
(37, 10, 'AWS Trusted Advisor', 0),
(38, 10, 'AWS Identity and Access Management (IAM)', 0),
(39, 10, 'AWS Billing Console', 0),
(40, 10, 'AWS Acceptable Use Policy', 1);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `question` text NOT NULL,
  `justify` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `quiz_id`, `question`, `justify`) VALUES
(1, 1, 'Why is AWS more economical than traditional data centers for applications with varying compute workloads?', 'The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load.'),
(2, 1, 'Which AWS service would simplify the migration of a database to AWS?', 'AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.'),
(3, 1, 'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?', 'AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS.'),
(4, 1, 'Which AWS networking service enables a company to create a virtual network within AWS?', 'Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.'),
(5, 1, 'Which of the following is an AWS responsibility under the AWS shared responsibility model?', 'Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.'),
(6, 1, 'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?', 'To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide.'),
(7, 1, 'How would a system administrator add an additional layer of login security to a user\'s AWS Management Console?', 'Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources.'),
(8, 1, 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?', 'AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.'),
(9, 1, 'Which service would be used to send alerts based on Amazon CloudWatch alarms?', 'Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries.'),
(10, 1, 'Where can a user find information about prohibited actions on the AWS infrastructure?', 'The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure.');

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

CREATE TABLE `quizzes` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `quizzes`
--

INSERT INTO `quizzes` (`id`, `name`, `description`) VALUES
(1, 'AWS Cloud Practitioner Knowledge', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
