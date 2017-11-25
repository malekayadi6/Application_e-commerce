<?php

use Cart\Basket\Basket;
use function DI\get;
use Cart\Models\Address;
use Cart\Models\Customer;
use Cart\Models\Order;
use Cart\Models\Payment;
use Cart\Models\Product;
use Cart\Models\User;
use Slim\Views\Twig;
use Slim\Views\TwigExtension;
use Interop\Container\ContainerInterface;
use Cart\Support\Storage\SessionStorage;
use Cart\Support\Storage\Contracts\StorageInterface;
use Cart\Validation\Contracts\ValidatorInterface;
use Cart\Validation\Validator;

return [
	'router' => get(Slim\Router::class),
	
	ValidatorInterface::class => function(ContainerInterface $c){
		return new Validator;
	},
	StorageInterface::class => function(ContainerInterface $c){
		return new SessionStorage('cart');
	},
	Twig::class => function(ContainerInterface $c){
		$twig = new Twig(__DIR__ . '/../resources/views', [
			'cache' => false
		]);

		$twig->addExtension(new TwigExtension(
			$c->get('router'),
			$c->get('request')->getUri()
		));

		$twig->getEnvironment()->addGlobal('basket', $c->get(Basket::class));

		return $twig;

	},

	Address::class => function(ContainerInterface $c){
		return new Address;
	},
	Customer::class => function(ContainerInterface $c){
		return new Customer;
	},
	Order::class => function(ContainerInterface $c){
		return new Order;
	},
	Payment::class => function(ContainerInterface $c){
		return new Payment;
	},
	Product::class => function(ContainerInterface $c){
		return new Product;
	},
    User::class => function(ContainerInterface $c){
		return new User;
	},

	Basket::class => function(ContainerInterface $c){
		return new Basket(
			$c->get(SessionStorage::class),
			$c->get(Product::class),
            $c->get(\Cart\Models\Image::class)
		);
	}

];
