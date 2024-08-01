
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $review = $_POST['review'];
    $topic = $_POST['topic'];

    $to = "your-email@example.com";
    $subject = "New Review Submission for $topic";
    $message = "Name: $name\nEmail: $email\nReview:\n$review";
    $headers = "From: webmaster@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your review!";
    } else {
        echo "There was an error submitting your review. Please try again.";
    }
}
?>
