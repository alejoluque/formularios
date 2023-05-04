<?php

function cookiesal(){
	wp_enqueue_script( 'cookiesal', plugins_url( 'cookiesal.js' , __FILE__ ), array( 'jquery' ) );
	
}
add_action( 'wp_enqueue_scripts', 'cookiesal' );


