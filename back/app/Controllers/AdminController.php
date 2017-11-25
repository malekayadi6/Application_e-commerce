<?php
/**
 * Created by PhpStorm.
 * User: axeleate
 * Date: 10/09/2017
 * Time: 15:08
 */

namespace Cart\Controllers;


use Cart\Models\Categorie;
use Cart\Models\Image;
use Cart\Models\Product;
use Cart\Models\Subcategorie;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\RequestInterface as Request;
class AdminController
{
    protected $image;
    protected $product;
    protected $subcategorie;
    protected $categorie;
    public function __construct(Image $image,Product $product,Categorie $categorie,Subcategorie $subcategorie){
        $this->image=$image;
        $this->product=$product;
        $this->categorie=$categorie;
        $this->subcategorie=$subcategorie;

    }
    public function addProduct(Request $request, Response $response)
    {
        $image=$request->getParam("image");

        $title=$request->getParam("title");
        $price=$request->getParam("price");
        $stock=$request->getParam("stock");
        $subcategoire=$request->getParam("subCategorie");
        $description=$request->getParam("description");
        $product = Product::firstOrCreate([
            'title' => $title,
            'price' => $price,
            'stock' => $stock,
            'subcategorie_id' => $subcategoire,
            'description' => $description,

        ]);









        $taille = count($image);
        for ($i = 0; $i < $taille; $i++) {
            Image::firstOrCreate([
                'title' => $image[$i],
                'product_id' => $product->id,


            ]);
        }
        $data = array('error' => "false",'msg'=> $product->title . "   has been successfully added");
        return $response->withJson($data);

    }


    public function addSubCategorie(Request $request, Response $response)
    {

        $title=$request->getParam("title");
        $idCategorie=$request->getParam("categorie");

        $subCategorie = Subcategorie::firstOrCreate([
            'title' => $title,

            'categorie_id' => $idCategorie,

        ]);
        $data = array('error' => "false",'msg'=> $subCategorie->title . "   has been successfully added");
        return $response->withJson($data);
    }


    public function addCategorie(Request $request, Response $response)
    {

         $title=$request->getParam("title");
           $image=$request->getParam("image");


        $taille = count($image);

       if ($taille == 0) {

            $categorie = Categorie::firstOrCreate([
                'title' => $title,
                'img1' => null,
                'img2' => null,


            ]);
        }else if ($taille == 1 ){
           $categorie = Categorie::firstOrCreate([
               'title' => $title,
               'img1' => $image[0],
               'img2' => null,


           ]);
           $data = array('error' => "false", 'msg' =>  $categorie->title . "   pfpfpfpfpfppf ");
           return $response->withJson($data);

       }else{
           $categorie = Categorie::firstOrCreate([
               'title' => $title,
               'img1' => $image[0],
               'img2' => $image[1],


           ]);
       }
        $data = array('error' => "false", 'msg' =>  $categorie->title . "   has been successfully added");
        return $response->withJson($data);



    }

    public function upStock($id,$title ,Request $request, Response $response, Product $product)
    {

        $product = $product->where('id',$id)->update(array('stock' => $title));

        if (!$product) {
            $data = array('erreur' => true, 'msg' => 'product does not exist');
            return $response->withJson($data);
        }
           $data = array('erreur' => false, 'msg' => " update successfully ");
            return $response->withJson($data);
    }
    public function upTitle($id,$title , Request $request, Response $response, Product $product)
    {
        $product = $product->where('id',$id)->update(array('title' => $title));

        if (!$product) {
            $data = array('erreur' => true, 'msg' => 'product does not exist ' .$id . 'title' . $title);
            return $response->withJson($data);
        }
        $data = array('erreur' => false, 'msg' => " update successfully ");
        return $response->withJson($data);

    }

     public function upPrice($id,$title , Request $request, Response $response,  Product $product)
    {
        $product = $product->where('id',$id)->update(array('price' => $title));

        if (!$product) {
            $data = array('erreur' => true, 'msg' => 'product does not exist');
            return $response->withJson($data);
        }
        $data = array('erreur' => false, 'msg' => " update successfully ");
        return $response->withJson($data);

    }



    public function remove($id,Request $request, Response $response,  Product $product)
    {
        $product = $product->where('id',$id)->delete();

        if (!$product) {
            $data = array('erreur' => true, 'msg' => 'product does not exist');
            return $response->withJson($data);
        }
        $data = array('erreur' => false, 'msg' => " delete successfully ");
         return $response->withJson($data);

    }
}