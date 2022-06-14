<?php
    //echo "script de leitura do banco de dados";
    
    $url = $_SERVER['REQUEST_URI'];
    //echo "<br/>".$url."<br/>";
    $id = parse_url($url, PHP_URL_QUERY);
    //echo "<br/>".$id."<br/>";
    parse_str( $id, $artistadaObra);
    //var_dump($artistadaObra);
    //echo "<br/>".$artistadaObra["autor"]."<br/>";
    $dbUser = 'root';
    $dbPassword = 'ifsp';
    $dbName = 'bdmuseu';
    $dbHost = 'localhost';
    $connection = mysqli_connect($dbHost, $dbUser, $dbPassword, $dbName);
    if ( $connection ){
        //echo "conexão efetuada com sucesso";
        //verificar
        $query = "select idObra, nomeObra, DATE_FORMAT(dataObra, '%d/%m/%Y') as dataObra, descricaoObra, urlObra from obra where ArtistaDaObra = ".$artistadaObra["autor"].";";
        //echo $query;
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