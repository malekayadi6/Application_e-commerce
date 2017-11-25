<?php

namespace Cart\Controllers;

use Slim\Router;
use Slim\Views\Twig;
use Cart\Basket\Basket;
use Cart\Models\Product;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Cart\Basket\Exceptions\QuantityExceededException;

class CartController{

	protected $basket;
	protected $product;

	public function __construct(Basket $basket, Product $product){
		$this->basket = $basket;
		$this->product = $product;
	}

	public function index(Request $request, Response $response, Twig $view){
		$this->basket->refresh();



        $cart=array(
            'allIem' => $this->basket->allForAngular(),
            'itemCount'=>$this->basket->itemCount(),
            'subTotal' => $this->basket->subTotal()
        );
        $data=array('cart'=>$cart);

        return $response->withJson($data);

     //   return $view->render($response, 'cart/index.twig');
	}

	public function add($id, $quantity, Request $request, Response $response, Router $router){
		$product = $this->product->where('id', $id)->first();


		if (!$product) {
            $data = array('erreur' => true, 'msg' => "porduct doas exist");
            return $response->withJson($data);

        }

		try {
			$this->basket->add($product, $quantity);
		} catch (QuantityExceededException $e) {
            $data = array('erreur' => true, 'msg' => $e->getMessage());

            return $response->withJson($data);

        }
        $data = array('erreur' => false, 'msg' => "add successful");
       return $response->withJson($data);
		//return $response->withJson({'ok' -> 'ok'} );

		return $response->withRedirect($router->pathFor('cart.index'));
	}

	public function update($id,$quantity,Request $request, Response $response, Router $router){
		$product = $this->product->where('id', $id)->first();
     /*   $paramValue = $request->getParam('t');
        echo $paramValue;

      /*  $body = $request->getBody();
        $t=json_decode($body);
            var_dump(  $t['t']);*/



     /*   echo 'malek';
        $body =  json_decode($request->getBody());
        $postArray = get_object_vars($body);

        $login = $postArray['t'];
       // $pass = $postArray['pass'];

// $email_id = $body['email'];
        echo $login;
        echo $paramValue;*/




       // return $response->withJson("test");

		if (!$product) {
			//return $response->withRedirect($router->pathFor('home'));
            $data=array(
                'erreur' => true,
                'msg'=>"Quantity Exceeded"

            );
            return $response->withJson($data);
		}

		try {
			$this->basket->update($product, $quantity);
		} catch (QuantityExceededException $e) {
            $data=array(
                'erreur' => true,
                'msg'=>$e->getMessage(),

            );
            return $response ->withJson($data);


        }
        $data=array(
            'erreur' => false,
            'msg'=>"update successful"

        );
        return $response ->withJson($data);

		//return $response->withRedirect($router->pathFor('cart.index'));
	}

	public function remove($id,Request $request,Response $response,Router $router){
        $product = $this->product->where('id', $id)->first();
        if (!$product) {
            //return $response->withRedirect($router->pathFor('home'));
            $data=array(
                'erreur' => true,
                'msg'=>"the product does not exist"

            );
            return $response->withJson($data);
        }
        $this->basket->remove($product);
      //   $this->basket->remove(Product $product);
           $data=array(
               'erreur' => false,
               'msg'=>"delete successful"

           );
           return $response->withJson($data);

    }

}
