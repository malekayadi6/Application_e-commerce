<?php
 
header("Access-Control-Allow-Origin: *");
header("Content-Type:Application/Json");
 
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  echo json_encode(array('status' => false));
  exit;
}


$path = 'resources/img/';

if (isset($_FILES['image'])) {
  $originalName = $_FILES['image']['name'];
  $ext = '.'.pathinfo($originalName, PATHINFO_EXTENSION);
  $generatedName = md5($_FILES['image']['tmp_name']).$ext;
  $filePath = $path.$originalName;
 
  if (!is_writable($path)) {
    echo json_encode(array(
      'status' => false,
      'msg'    => 'Destination directory not writable.'
    ));
    exit;
  }
 
  if (move_uploaded_file($_FILES['image']['tmp_name'], $filePath)) {
    echo json_encode(array(
      'status'        => true,
      'originalName'  => $originalName,
      'generatedName' => $generatedName
    ));
  }
}
else {
  echo json_encode(
    array('status' => false, 'msg' => "no file malek malek ")
  );
  exit;
}
 
?> 