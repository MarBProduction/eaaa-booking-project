<?php
  session_start();
  
  if(isset($_SESSION['bookingUserToken'])) header("location: index.php");

  $fail = false;
  $response = isset($_GET['login']) ? $_GET['login'] : "";

  if($response == "fail") $fail = true;

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Login - Maanli Bookingsystem</title>
</head>

<body>
  <wrapper id="flexbox">
    <section class="login--box">
      <?php 
        if ($fail) echo "<p id='log-in-fail-text'>Your password or username is wrong</p>";
      ?>
      <form action="./api/update/authentication" method="post" id="login-form">
        <label>
          <p>Email</p>
          <input type="text" name="emailLogin" id="login-email">
        </label>
        <label>
          <p>Password</p>    
          <input type="password" name="passwordLogin" id="login-password">
        </label>
        <input type="submit" id="login-submit" value="Log In">
      </form>
      <div id="test_users">
        <p>Use the following two test accounts, to test the solution</p>
        <p>Email: Testy Password: test</p>
        <p>Email: Tasta Password: tast</p>
      </div>
    </section>
  </wrapper>
</body>
</html>