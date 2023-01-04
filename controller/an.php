<?php
require_once('../view/answersView.php');
$answers = new AnswersView();
$results = $answers->getCorrectAnswers();
echo json_encode($results);
