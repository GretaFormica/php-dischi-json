<?php

    $list = file_get_contents(__DIR__ . "./object.json");

    header('Content-Type: application/json');

    echo $list;
?>