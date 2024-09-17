<?php
$servername_encrypted = base64_encode("free02.123host.vn");
$username_encrypted = base64_encode("otuitleg_portfolio");
$password_encrypted = base64_encode("anhtytv123");
$database_encrypted = base64_encode("otuitleg_portfolio");

$user_id = 1; // Chọn người dùng

$home_sql = "SELECT * FROM home WHERE user_id = $user_id";
$social_sql = "SELECT * FROM social WHERE user_id = $user_id";
$services_sql = "SELECT * FROM services WHERE user_id = $user_id";
$projects_sql = "SELECT * FROM projects, projects_users WHERE projects.id = projects_users.project_id AND user_id = $user_id";
$education_sql = "SELECT * FROM education WHERE user_id = $user_id";
$experiance_sql = "SELECT * FROM experiance WHERE user_id = $user_id";
$header_sql = "SELECT * FROM header WHERE user_id = $user_id";
$footer_sql = "SELECT * FROM footer WHERE user_id = $user_id";

$home_sql_encrypted = base64_encode($home_sql);
$social_sql_encrypted = base64_encode($social_sql);
$services_sql_encrypted = base64_encode($services_sql);
$projects_sql_encrypted = base64_encode($projects_sql);
$education_sql_encrypted = base64_encode($education_sql);
$experiance_sql_encrypted = base64_encode($experiance_sql);
$header_sql_encrypted = base64_encode($header_sql);
$footer_sql_encrypted = base64_encode($footer_sql);
?>
