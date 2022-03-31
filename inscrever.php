<?php
include("conexao.php");
//$result = $dbh->query('SELECT * FROM newsletter')->fetchAll(PDO::FETCH_CLASS);

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST)){
  
  if (!empty($_POST['email'])){
    $email = $_POST['email'];
    $dbh->prepare("INSERT INTO newsletter (id, email) VALUES (null, :email)")
      ->execute(['email' => $email]);

    echo json_encode(['success' => 'true', 'msg' => 'Email cadastrado com sucesso!']);
  } else  {
    echo json_encode(['success' => 'false', 'msg' => 'E-mail não informado'.$_POST['email']]);
  }  
} else {
  echo json_encode(['success' => false, 'msg' => 'Metodo Get não é permitido!']);
}
