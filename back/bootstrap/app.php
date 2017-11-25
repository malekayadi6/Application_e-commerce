<?php

use Cart\App;
use Slim\Views\Twig;
use Illuminate\Database\Capsule\Manager as Capsule;

session_start();

require __DIR__ . '/../vendor/autoload.php';

$app = new App;

$container = $app->getContainer();

$capsule = new Capsule;
$capsule->addConnection([
	'driver' => 'mysql',
	'host' => '127.0.0.1',
	'database' => 'asma',
	'username' => 'root',
	'password' => '',
	'charset' => 'utf8',
	'collation' => 'utf8_unicode_ci',
	'prefix' => ''
]);

$capsule->setAsGlobal();
$capsule->bootEloquent();

Braintree_Configuration::environment('sandbox');
Braintree_Configuration::merchantId('4737xr27hrnyw3fc');
Braintree_Configuration::publicKey('w5m8n9fg35twhhth');
Braintree_Configuration::privateKey('f0bdd4787af2e5a1832e9d41e99757cf');

/*Braintree_Configuration::environment('sandbox');
Braintree_Configuration::merchantId('yskjkmc63sw65cjx');
Braintree_Configuration::publicKey('d7b7phv6shh87rkm');
Braintree_Configuration::privateKey('960d23fb98a0ba8746e8cc6cc31d53dc');*/

require __DIR__ . '/../app/routes.php';

$app->add(new \Cart\Middleware\ValidationErrorsMiddleware($container->get(Twig::class)));
$app->add(new \Cart\Middleware\OldInputMiddleware($container->get(Twig::class)));