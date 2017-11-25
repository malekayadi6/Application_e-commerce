<?php
$app->get('/test',function ($request, $response) {
    // Show book identified by $args['id']
    return $response->withRedirect ((string)($request->getUri()->withPath('assets')));

});


$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
        ->withHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});
$app->get('/', ['Cart\Controllers\HomeController', 'index'])->setName('home');
$app->get('/cat', ['Cart\Controllers\HomeController', 'cat'])->setName('home.cat');
$app->get('/listproducts/{id}', ['Cart\Controllers\HomeController', 'getProducts'])->setName('products.cat');

$app->get('/products/{id}', ['Cart\Controllers\ProductController', 'get'])->setName('product.get');

$app->get('/cart', ['Cart\Controllers\CartController', 'index'])->setName('cart.index');

$app->get('/cart/add/{id}/{quantity}', ['Cart\Controllers\CartController', 'add'])->setName('cart.add');
$app->get('/cart/update/{id}/{quantity}', ['Cart\Controllers\CartController', 'update'])->setName('cart.update');
$app->get('/cart/remove/{id}', ['Cart\Controllers\CartController', 'remove'])->setName('cart.remove');


$app->get('/order', ['Cart\Controllers\OrderController', 'index'])->setName('order.index');
$app->get('/order/{hash}', ['Cart\Controllers\OrderController', 'show'])->setName('order.show');
$app->post('/order', ['Cart\Controllers\OrderController', 'create'])->setName('order.create');

$app->get('/braintree/token', ['Cart\Controllers\BraintreeController', 'token'])->setName('braintree.token');


// auth

$app->post('/auth/login', ['Cart\Controllers\AuthController', 'postSignIn'])->setName('auth.postSignIn');
$app->get('/user/{id}', ['Cart\Controllers\UserController', 'getUser'])->setName('user.getUser');
$app->get('/logout', ['Cart\Controllers\AuthController', 'logOut'])->setName('user.logOut');
$app->post('/product/add', ['Cart\Controllers\AdminController', 'addProduct'])->setName('user.addProduct');
$app->post('/subcategorie/add', ['Cart\Controllers\AdminController', 'addSubCategorie'])->setName('user.addSubCategorie');

$app->post('/categorie/add', ['Cart\Controllers\AdminController', 'addCategorie'])->setName('user.addCategorie');
$app->post('/auth/signup', ['Cart\Controllers\AuthController', 'signup'])->setName('user.signup');


$app->get('/user/upstock/{id}/{title}', ['Cart\Controllers\AdminController', 'upStock'])->setName('user.upStock');
$app->get('/user/uptitle/{id}/{title}', ['Cart\Controllers\AdminController', 'upTitle'])->setName('user.upTitle');
$app->get('/user/upprice/{id}/{title}', ['Cart\Controllers\AdminController', 'upPrice'])->setName('user.upPrice');
$app->get('/user/remove/{id}', ['Cart\Controllers\AdminController', 'remove'])->setName('user.upPrice');



