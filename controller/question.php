<?php
require_once('../view/questionsView.php');
$questions = new QuestionView();
$results = $questions->getAllQuestions();
echo json_encode($results);
// echo '<pre>';
// print_r($results);
// echo '</pre>';
