<?php

// $encoded_data = json_encode($results, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
// file_put_contents('assets/json/data.json', $encoded_data);
// print_r($encoded_data);
// die;


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quizzy - AWS Practitioner</title>

    <link rel="stylesheet" href="./assets/css/style.css" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/css/bootstrap.min.css" integrity="sha512-XWTTruHZEYJsxV3W/lSXG1n3Q39YIWOstqvmFsdNEEQfHoZ6vm6E9GK2OrF6DSJSpIbRbi+Nn0WDPID9O7xB2Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/js/bootstrap.min.js" integrity="sha512-8Y8eGK92dzouwpROIppwr+0kPauu0qqtnzZZNEF8Pat5tuRNJxJXCkbQfJ0HlUG3y1HB3z18CSKmUo7i2zcPpg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.js" integrity="sha512-nO7wgHUoWPYGCNriyGzcFwPSF+bPDOR+NvtOYy2wMcWkrnCNPKBcFEkU80XIN14UVja0Gdnff9EmydyLlOL7mQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body class="wallpaper">
    <main>
        <div class="container mt-5">
            <ul class="stepper">
                <li class="active">Rules</li>
                <li id="QstSt">Questions</li>
                <li id="RsltSt"> Result</li>
            </ul>
        </div>

        <div class="quizz-card" id="rules">
            <div class="question">Rules</div>
            <p class="m-5 fw-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, error non quis odit ipsum deleniti quaerat et omnis labore cupiditate, at, veritatis quia accusamus rerum ipsam enim sit harum velit!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A pariatur voluptate laudantium commodi reprehenderit quas voluptatum natus labore vel culpa, sed dolore. Quod molestiae aperiam optio ipsum, voluptas quae necessitatibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur consequatur dolores maiores dicta culpa eos eum. Beatae alias odit quasi. Neque a dolore sint non dolorem labore eaque ipsum.
            </p>
            <div class="end">
                <button type="button" class="btn btn-success" onclick="getQuestions()">Accept and Start<button>
            </div>
        </div>

        <div class="quizz-card" id="questions" style="display:none">
            <h4 class="d-flex justify-content-between">Question : <span id="questionNumber" class="ms-1"></span>
                <div class="text-warning" id="countdown"></div>
            </h4>
            <div class="question" id="questionn" data-id=""></div>
            <section class="answers">
                <button class="card choice" id="answer1" data-answer="A"></button>
                <button class="card choice" id="answer2" data-answer="B"></button>
                <button class="card choice" id="answer3" data-answer="C"></button>
                <button class="card choice" id="answer4" data-answer="D"></button>
            </section>

            <div class="end"><button type="button" class="btn btn-primary next">Next Question</button></div>
        </div>

        <div class="quizz-card" style="display:none" id="result">
            <div class="question">Result</div>
            <div class="d-flex flex-wrap">
                <div id="correct" class="badge text-bg-success py-2 my-2"></div>
                <div id="wrong" class="badge text-bg-danger py-2 m-2"></div>
                <div id="score" class="badge text-bg-warning py-2 my-2"></div>
            </div>
            <div class="justify">

            </div>
        </div>

    </main>
    <script src="./assets/js/script.js" defer></script>
</body>

</html>