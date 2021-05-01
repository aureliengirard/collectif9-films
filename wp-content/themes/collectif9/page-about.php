<?php
/**
 * Template Name: Page À propos
 */

$context = Timber::get_context();

$post = new TimberPost();
$context['page'] = $post;

Timber::render('templates/page-about.twig', $context);
