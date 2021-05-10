<?php
/**
 * Template Name: Page Film
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['page'] = $post;

// Get all films
$films_args = array(
    'post_type'  => 'films',
    'posts_per_page' => -1,
);
$context['film_concerts'] = new Timber\PostQuery($films_args);

Timber::render('page-film.twig', $context);
