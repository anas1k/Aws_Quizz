<?php
include_once('cnx.php');

class Questions extends Connection
{

    protected function getAllQuestionsDB()
    {
        $sql = "SELECT id, question FROM questions";
        $stmt = $this->connect()->query($sql);
        $results = $stmt->fetchAll();
        foreach ($results as $result) {
            $id = $result['id'];
            $sql = "SELECT answer FROM answers WHERE question_id = $id";
            $stmt = $this->connect()->query($sql);
            $answers = $stmt->fetchAll();
            $an = [];
            foreach ($answers as $answer) {
                $an[] = $answer['answer'];
            }
            $result['answers'] = $an;
            $questions[] = $result;
        }
        return $questions;
    }
}
