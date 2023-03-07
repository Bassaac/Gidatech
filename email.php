<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $company = trim($_POST['company']);
    $country = trim($_POST['country']);
    $state = trim($_POST['state']);
    $city = trim($_POST['city']);
    $address = trim($_POST['address']);
    $zipcode = trim($_POST['zipcode']);
    $subject = trim($_POST['subject']);
    $message = trim($_POST['message']);
    $interested = isset($_POST['interested']) ? implode(', ', $_POST['interested']) : '';
    $found_us = isset($_POST['found_us']) ? $_POST['found_us'] : '';
    $newsletter = isset($_POST['newsletter']) ? $_POST['newsletter'] : '';

    $to = 'info@gidatech.ng'; // replace with your domain email address
    $subject = 'New contact form submission';
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\nCountry: $country\nState/Province: $state\nCity: $city\nAddress: $address\nZip/Postal Code: $zipcode\nSubject: $subject\nMessage:\n$message\nInterested in: $interested\nHow did you find us?: $found_us\nSubscribe to newsletter?: $newsletter";
    $headers = "From: $email";

      // Redirect to a thank-you page or show a success message
    header("Location: thank-you.html");
    exit;
} else {
    // If the request method is not POST, redirect back to the form page
    header("Location: contact.html");
    exit;

    if(mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "There was a problem sending your message.";
    }
}
?>```
