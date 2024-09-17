<?php
include 'config.php';

$servername = base64_decode($servername_encrypted);
$username = base64_decode($username_encrypted);
$password = base64_decode($password_encrypted);
$database = base64_decode($database_encrypted);

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Kết nối tới MySQL thất bại: " . $conn->connect_error);
}

$conn->set_charset("utf8");

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
$subject = $data['subject'];
$message = $data['message'];

// Câu truy vấn SQL
$sql = "INSERT INTO contact (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(array("message" => "Đã gửi thành công"));
} else {
    echo json_encode(array("message" => "Lỗi: " . $sql . "<br>" . $conn->error));
}

$conn->close();
?>
