<?php

include_once('../model/questions.php');

class QuestionView extends Questions
{

    public function getAllQuestions()
    {
        $results = $this->getAllQuestionsDB();
        return $results;
    }
}
