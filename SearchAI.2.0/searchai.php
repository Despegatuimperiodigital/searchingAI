<?php
/*
Plugin Name: Search AI 2.0
Plugin URI: https://despegatuimperiodigital.com
Description: Descripción de lo que hace tu plugin.
Version: 1.0
Author: Tu Nombre
Author URI: https://despegatuimperiodigital.com
License: GPL2
*/

function mipluginreact_enqueue_scripts() {
    // Asume que 'build/static/js/main.js' es tu script compilado de React.
    wp_enqueue_script('mipluginreact-js', plugins_url('/build/static/js/main.js', __FILE__), array(), '1.0', true);
    
    // Asume que 'build/static/css/main.css' es tu hoja de estilos de React.
    wp_enqueue_style('mipluginreact-css', plugins_url('/build/static/css/main.css', __FILE__), array(), '1.0');
}

add_action('wp_enqueue_scripts', 'mipluginreact_enqueue_scripts');

function mipluginreact_shortcode() {
    // Este shortcode inserta el contenedor donde React montará la aplicación.
    return '<div id="app"></div>';
}

add_shortcode('mipluginreact', 'mipluginreact_shortcode');
?>
