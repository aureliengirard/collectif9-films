<?php

// CUSTOM POST TYPES DECLARATION.
// META BOXES FOR PARENT RELATIONSHIPS ARE AT THE BOTTOM

// Services
// $labels = array(
// 	'name' => __('Services'),
// 	'singular_name' => __('Service'),
// 	'add_new_item' => __('Add New Service'),
// 	'new_item' => __('New Service'),
// );
// $rewrite = array(
// 	'slug' => 'service',
// 	'with_front' => true,
// 	'pages' => true,
// );
// $args = array(
// 	'labels' => $labels,
// 	'public' => true,
// 	'has_archive' => false,
// 	'show_in_menu' => true,
// 	'hierarchical' => false,
// 	'menu_position' => 5,
// 	'menu_icon' => 'dashicons-hammer',
// 	'supports' => array('title', 'editor', 'thumbnail', ),
// 	'rewrite' => $rewrite,
// );
// register_post_type('service', $args);

 //Services
 $labels = array(
 	'name' => __('Films concerts'),
 	'singular_name' => __('Films concerts'),
 	'add_new_item' => __('Ajouter un film concert'),
 	'new_item' => __('Nouveau film concert'),
 );
 $rewrite = array(
 	'slug' => 'films',
 	'with_front' => true,
 	'pages' => true,
 );
 $args = array(
 	'labels' => $labels,
 	'public' => true,
 	'has_archive' => false,
 	'show_in_menu' => true,
 	'hierarchical' => false,
 	'menu_position' => 5,
 	'menu_icon' => 'dashicons-hammer',
 	'supports' => array('title', 'editor', 'thumbnail', ),
 	'rewrite' => $rewrite,
 );
 register_post_type('films', $args);
