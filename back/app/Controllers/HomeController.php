<?php

namespace Cart\Controllers;

use Cart\Models\Categorie;
use Cart\Models\Order;
use Cart\Models\Subcategorie;
use function DI\get;
use Slim\Views\Twig;
use Cart\Models\Product;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class HomeController{

	public function index(Request $request, Response $response, Twig $view,Categorie $categorie , Product $product)
    {

       $categories=$categorie->with('subcategories')->get();

        $data=array('categorie' => $categories);
        return $response->withJson($data);

       $products = $product->with('image')->get();

        $data=array('products' => $products);

        return $response->withJson($data);



    }
    // get all categoriess
    public function cat(Request $request, Response $response,Categorie $categorie)
    {
        $categories=$categorie->with('subcategories')->get();

        $data=array('categorie' => $categories);
        return $response->withJson($data);




    }


    // get products in categories
    public function getProducts($id,Request $request, Response $response, Twig $view,Subcategorie $subcategorie , Product $product)
    {


        $products=$product->where('subcategorie_id',$id)->with('image')->orderBy('id', 'DESC')->get();
       // $subcategorie=$subcategorie->with('products')->where('id',$id)->get();


        $data=array('products' => $products);
        return $response->withJson($data);
    }
}
