<?php

  if (isset($_POST['email']) && !empty($_POST['email'])) {
  
  $name = addslashes($_POST['name'])
  $email = addslashes($_POST['email'])
  $formSubject = addslashes($_POST['subject'])
  $message = addslashes($_POST['message'])

  $to = "thamiavicente@gmail.com";
  $subject = $formSubject;
  $body = "Name: ".$nome. "\r\n".
          "Email: ".$email. "\r\n".
          "Messagem: ".$message;
  $header = "From: contato@thamiavicente.com"."\r\n".
            "Reply-To: ".$email."\r\n".
            "X=Mailer:PHP/".phpversion();
  
  
  }

  $contact->add_message( $_POST['name'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['message'], 'Message', 10);

  echo $contact->send();
?>
