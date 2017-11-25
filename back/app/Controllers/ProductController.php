<?php

namespace Cart\Controllers;

use Slim\Router;
use Slim\Views\Twig;
use Cart\Models\Product;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ProductController{

	protected $view;

	public function __construct(Twig $view){
		$this->view = $view;
	}

	public function getCategories(Request $request, Response $response,Router $router){


    }

	public function get($id, Request $request, Response $response, Twig $view, Router $router, Product $product){
        $product = $product->where('id',$id)->first();
        if (!$product) {
            $data=array('erreur'=>true,'msg'=>'product does not exist');
            return $response->withJson($data);
        }
        $hasLowStock= $product->hasLowStock();
        $inStock =$product->inStock();
        $outOfStock= $product->outOfStock();
		$product = $product->with('image')->where('id',$id)->get();






        $res=array('product' => $product,'hasLowStock'=>$hasLowStock,'inStock'=>$inStock,'outOfStock'=>$outOfStock);

        $data=array('product'=>$res);



        return $response->withJson($data);
        return $this->view->render($response, 'products/product.twig', [
            'product' => $product
        ]);

	}

}
