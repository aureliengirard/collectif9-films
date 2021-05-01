<?php
/**
 * Template Name: Page d'accueil
 */

$context = Timber::get_context();

$post = new TimberPost();
$context['page'] = $post;

Timber::render('templates/page-home.twig', $context);
