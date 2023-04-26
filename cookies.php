<?php

if(isset($_GET['utm_source'])) {
    //set traffic source cookie for 24h
    setcookie("utm_source", $_GET['utm_source'], time()+3600*24,"/");    
}
