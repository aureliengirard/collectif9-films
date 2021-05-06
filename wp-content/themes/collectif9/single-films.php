<?php
/**
 * Template Name: Page Film
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['page'] = $post;

Timber::render('page-film.twig', $context);
