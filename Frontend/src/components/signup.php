<?php
//declaring the valuables
$name = $_POST['name']
$email = $_POST['email']
$password = $_POST['password']

//database connection
$conn = new mysqli('localhost','root'/*username*/,''/*xamp password is blank by default*/,'project dreams');
if($conn->connect_error){
    die('connection failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into signup(name, email, password) values(?,?,?)");
    $stmt->bind_param("sss",$name, $email, $password);
    $stmt->execute();
    echo "registration successiful..."
    $stmt->close();
    $conn->close();
}
?>