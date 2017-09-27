<?php

use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\Cache\Simple\FilesystemCache;

require __DIR__ . '/../vendor/autoload.php';

const CACHE_KEY = 'feed_crawler.contents';
const CACHE_DIR = __DIR__ . '/../etc/cache/symfony/filesystem_cache';

if (!isset($argv[1]) || !$argv[1]) {
  throw new \RuntimeException('URL not specified');
}

$url = $argv[1];

$cache = new FilesystemCache(CACHE_KEY, 60, CACHE_DIR);

if (!$cache->has(CACHE_KEY)) {
  echo 'fetching contents...' . PHP_EOL;
  $cache->set(CACHE_KEY, file_get_contents($url));
}

$crawler = new Crawler($cache->get(CACHE_KEY));


$results = [];

foreach ($crawler->filterXPath('rss/channel/item') as $item) {
  $element = new Crawler($item);
  $results[] = [
    'title' => $element->filter('title')->text(),
    'link' => $element->filter('link')->text(),
    'description' => $element->filter('description')->text(),
  ];
}

var_dump($results);

