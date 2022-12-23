<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quizzy - AWS Practitioner</title>

        <link rel="stylesheet" href="assets/sass/style.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    
    </head>
    <body>
        <main class="wallpaper">
            <?php include_once 'include/navbar.php'; ?>
            <div class="container mt-3">
                <ul class="progressbar">
                    <li class="active">Rules</li>
                    <li>Questions</li>
                    <li>Result</li>
                </ul>
            </div>
            <div class="quizz-card">
                <div class="question">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo excepturi repudiandae? Quod delectus eaque similique omnis incidunt ea?</div>
                <section class="answers">
                    <div class="card" data-answer="1">Answer 1</div>
                    <div class="card" data-answer="2">Answer 1</div>
                    <div class="card" data-answer="3">Answer 1</div>
                    <div class="card" data-answer="4">Answer 1</div>
                </section>
            </div>
        </main>
    </body>
</html>
