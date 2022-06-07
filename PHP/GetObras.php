<?php
    //echo "script de leitura do banco de dados";

    $dbUser = 'root';
    $dbPassword = 'ifsp';
    $dbName = 'bdmuseu';
    $dbHost = 'localhost';
    $connection = mysqli_connect($dbHost, $dbUser, $dbPassword, $dbName);
    if ( $connection ){
        //echo "conexão efetuada com sucesso";
        $query = "select * from obra;";
        $results = mysqli_query( $connection , $query);
        $obras = [];
        $index = 0;
        while($record = mysqli_fetch_row($results)){
            $obra = new stdClass();
            $obra->id = $record[0];
            $obra->name = $record[1];
            $obra->data = $record[2];
            $obra->descricao = $record[3];
            $obra->url = $record[4];
            $obras[$index] = $obra;
            $index = $index + 1;
        }
        echo json_encode($obras);
    }else{
        echo "conexão falhada";
        var_dump(mysqli_conect_error);
    }
?>