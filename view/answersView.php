<?php

include_once '../model/answers.php';

class AnswersView extends Answers
{

    public function getCorrectAnswers()
    {
        $results = $this->getAnswersDB();
        return $results;
    }
}
