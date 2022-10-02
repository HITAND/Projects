<html>

<head>
    <title>PHP Test</title>
</head>

<body style='width:auto; height:auto; background-image:url("../coffee/blob-scene-haikei (3).svg"); background-repeat: no-repeat; background-size: cover; text-align:center; font-size: 25px;'>
    <?php
mysql_connect("localhost", "root", "") or die(mysql_error());
//mysql_query("CREATE DATABASE mydatabase") or die(mysql_error());
mysql_select_db("mydatabase") or die(mysql_error());

mysql_query("create table users (
    id_user int (10) AUTO_INCREMENT,
    name varchar(20) NOT NULL,
    email varchar(50) NOT NULL,
    phone varchar(25) NOT NULL,
    PRIMARY KEY (id_user)
)");

    if (isset($_POST['name'])) {
        $name = $_POST['name'];
    }
    if (isset($_POST['email'])) {
        $email = $_POST['email'];
    }
    if (isset($_POST['mess'])) {
        $mess = $_POST['mess'];
    }
    if (isset($_POST['phone'])) {
        $phone = $_POST['phone'];
    }
    if (empty($name)) {
        echo "<b style='color: #9E805C;  margin:10px;'>Не указано имя!<b> <br>";
        echo "<a href=Coffee.html style='color:#EFE6DE; margin:10px;'>Вернуться к заполнению формы</a><br>";
        echo "<img src='error.jpg' style='border-radius:5px;  margin:10px;'>";
        exit;
    } elseif (empty($email)) {
        echo "<b style='color: #9E805C;  margin:10px;'>Не указан e-mail!<b><br>";
        echo "<a href=Coffee.html style='color:#EFE6DE; margin:10px;'>Вернуться к заполнению формы</a><br>";
        echo "<img src='error.jpg' style='border-radius:5px;  margin:10px;'>";
        exit;
    } elseif (empty($phone)) {
        echo "<b style='color: #9E805C; margin:10px;'>телефон не написан!<p><br>";
        echo "<a href=Coffee.html style='color:#EFE6DE; margin:10px;'>Вернуться к заполнению формы</a><br>";
        echo "<img src='error.jpg' style='border-radius:5px;  margin:10px;'>";
        exit;
    } elseif(empty($mess)) {
        echo "<b style='color: #9E805C; margin:10px;'>сообщение не указано</b><br>";
        echo "<a href=Coffee.html style='color:#EFE6DE; margin:10px;'>Вернуться к заполнению формы</a><br>";
        echo "<img src='error.jpg' style='border-radius:5px;  margin:10px;'>";
        exit;
    }
    else{
    $to = "polishball.pl12@gmail.com";
    $headers = "Reply-to: Content-type: text/plain; charset = utf-8";
    $subject = "Сообщение с CMAC";
    $message = "Имя отправителя: $name \nЭлектронный адрес: $email \nСообщение: $mess";
    $send = mail($to, $subject, $message, $headers);
    }
    $sql = mysql_query("SELECT * FROM `users`");
    $usersPhone = mysql_fetch_assoc($sql);
    // $phoneName = $usersPhone[name].$usersPhone[email].$usersPhone[phone];
    $nameUsers = $usersPhone[name];
    $emailUsers = $usersPhone[email];
    $phoneUsers = $usersPhone[phone];

    if ($nameUsers == $_POST["name"]){
        echo "<p style='color: #9E805C; margin:10px;'>Пользователь с таким именем уже присутствует</p><br>";
        echo "<a href=Coffee.html style='color:#EFE6DE; margin:10px;'>Вернуться к заполнению формы</a><br>";
        echo "<img src='error.jpg' style='border-radius:5px;  margin:10px;'>";
        exit;
    } 
    if ($emailUsers == $_POST["email"]){
        echo "<p style='color: #9E805C; margin:10px;'>Пользователь с таким email уже присутствует</p><br>";
        echo "<a href=Coffee.html style='color:#EFE6DE; margin:10px;'>Вернуться к заполнению формы</a><br>";
        echo "<img src='error.jpg' style='border-radius:5px;  margin:10px;'>";
        exit;
    } 
    if($phoneUsers == $_POST["phone"]){
        echo "<p style='color: #9E805C; margin:10px;'>Пользователь с таким номером телефона уже присутствует</p><br>";
        echo "<a href=Coffee.html style='color:#EFE6DE; margin:10px;'>Вернуться к заполнению формы</a><br>";
        echo "<img src='error.jpg' style='border-radius:5px;  margin:10px;'>";
        exit;
    } 
    else {
        mysql_query("INSERT INTO users (name, email, phone) VALUES
       ('" . $_POST["name"] . "', '" . $_POST["email"] . "', '" . $_POST["phone"] . "')
       ");
    }


    if ($send == true and $phoneName != $_POST["name"].$_POST["email"].$_POST["phone"]) {
        echo "<b style='color: #9E805C; margin:10px;'>Спасибо за отправку вашего сообщения!<p><br>";
        echo "<a href=Coffee.html style='color:#EFE6DE; margin:10px;'>Нажмите, чтобы вернуться на главную страницу</a><br>";
        echo "<img src='like.jpg' style='border-radius:5px;  margin:10px;'>";
    } else {
        echo "<p style='color: #9E805C; margin:10px;'><b>Ошибка. Сообщение не отправлено!</b><br>";
        echo "<a href=Coffee.html style='color:#EFE6DE; margin:10px;'>Вернуться к заполнению формы</a><br>";
        echo "<img src='error.jpg' style='border-radius:5px;  margin:10px;'>";
    }
    mysql_close();
    ?>
</body>

</html>