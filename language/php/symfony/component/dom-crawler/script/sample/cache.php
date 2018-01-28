<?php

use Symfony\Component\Cache\Simple\FilesystemCache;

require __DIR__ . '/../../vendor/autoload.php';

$cache = new FilesystemCache();


// save a new item in the cache
$cache->set('stats.num_products', 4711);

// or set it with a custom ttl
// $cache->set('stats.num_products', 4711, 3600);

// retrieve the cache item
if (!$cache->has('stats.num_products')) {
  // ... item does not exists in the cache
  $cache->set('stats.num_products', 5711);
}

// retrieve the value stored by the item
$numProducts = $cache->get('stats.num_products');

var_dump($numProducts);

// or specify a default value, if the key doesn't exist
// $numProducts = $cache->get('stats.num_products', 100);

// remove the cache key
$cache->delete('stats.num_products');

// clear *all* cache keys
$cache->clear();

