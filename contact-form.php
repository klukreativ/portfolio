<?php 
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'karl.lu@outlook.com';
$email_subject = "New Form submission";
$email_body = "You have received a new message from the user $name.\n".
                           
$to = "karl.lu@outlook.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n"

// if($_POST["message"]) {

    mail($to, $email_subject, $email_body, $headers);
// }

?>