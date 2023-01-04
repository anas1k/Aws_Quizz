<?php

include_once 'cnx.php';

class Answers extends Connection
{
    protected function getAnswersDB()
    {
        $sql = "SELECT a.question_id, a.answer, q.justify FROM answers a, questions q WHERE a.question_id = q.id AND a.correct = '1' ";
        $stmt = $this->connect()->query($sql);
        $results = $stmt->fetchAll();
        return $results;
    }
}
