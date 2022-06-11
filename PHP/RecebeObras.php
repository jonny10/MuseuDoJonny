<?php 

    ini_set("display_errors",1);
    error_reporting(E_ALL);
    
    $nomeObra = $_GET['nome'];
    $dataObra = $_GET['dataDaObra'];
    $imageObra = $_GET['image'];
    $descricaoObra = $_GET['descricao'];
    $artistaObra = $_GET['artista'];

    $dbUser = 'root';
    $dbPassword = '';
    $dbName = 'bdmuseu';
    $dbHost = 'localhost';
    $connection = mysqli_connect($dbHost, $dbUser, $dbPassword, $dbName);
    if ( $connection ){
        echo "conexão efetuada com sucesso";
        $query = "insert into obra values (null, '".$nomeObra."', '".$dataObra."', '".$descricaoObra."', '".$imageObra."', ".$artistaObra.");";
        echo '</br>', $query;
        $res = mysqli_query( $connection, $query );
        if($res){
            echo "</br>produto incluido com sucesso";
            header('location: http://localhost:3000/cadastroDaobra.html');
        }else{
            echo "produto não incluido";
        }
    }else{
        echo "conexão falhada";
        var_dump(mysqli_conect_error);
    }

?>