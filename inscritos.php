<?php
include("conexao.php");

$result = $dbh->query('SELECT * FROM newsletter ORDER BY id asc')->fetchAll(PDO::FETCH_CLASS);
$data = json_encode($result);

echo json_encode(['success' => 'true', 'data' => $data]);