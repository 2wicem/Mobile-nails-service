<?php
//declaring the valuables
$name = $_POST['name']
$phone = $_POST['phone']
$service = $_POST['service']
$location = $_POST['location']
$date = $_POST['date']
$time = $_POST['time']

//database connection
$conn = new mysqli('localhost','root'/*username*/,''/*xamp password is blank by default*/,'project dreams');
if($conn->connect_error){
    die('connection failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into book service(name, phone, service, location, date, time) values(?,?,?,?,?,?)");
    $stmt->bind_param("sss",$name, $phone, $service, $location, $date, $time);
    $stmt->execute();
    echo "registration successiful..."
    $stmt->close();
    $conn->close();
}
?>