<?php
// Thông tin kết nối tới cơ sở dữ liệu
include 'config.php';

// Giải mã thông tin kết nối
$servername = base64_decode($servername_encrypted);
$username = base64_decode($username_encrypted);
$password = base64_decode($password_encrypted);
$database = base64_decode($database_encrypted);

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $database);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối tới MySQL thất bại: " . $conn->connect_error);
}

// Thiết lập bộ mã UTF-8 để tránh lỗi hiển thị kí tự không mong muốn
// Thiết lập kết nối MySQL để sử dụng UTF-8
$conn->set_charset("utf8");


// Câu truy vấn SQL
$sql = base64_decode($home_sql_encrypted);
$result = $conn->query($sql);

// Kiểm tra và trả về dữ liệu dưới dạng JSON
if ($result->num_rows > 0) {
    $data = array();
    while($row = $result->fetch_assoc()) {
        // Chắc chắn là dữ liệu không chứa kí tự đặc biệt bằng cách sử dụng hàm htmlentities
        $row = array_map('htmlentities', $row);
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode(array("message" => "Không có kết quả"));
}

// Đóng kết nối
$conn->close();
?>