<?php
/**
 * Created by PhpStorm.
 * User: axeleate
 * Date: 09/09/2017
 * Time: 14:00
 */

namespace Cart\Controllers;
use Cart\Models\User;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\RequestInterface as Request;
use Slim\Router;



class AuthController
{
    protected $user;
    public function __construct(User $user){
        $this->user=$user;
    }
    public function postSignIn(Request $request, Response $response,Router $router){



        $email=$request->getParam("email");
        $password=$request->getParam("password");


        $user=$this->user->where('email',$email)->first();

        if(!$user){
            // mesh mawjoud :D
            $data = array('error' => true,'msg'=> "email does not exist");
            return $response->withJson($data);
        }


        if($password==$user->password){
            // password invalid
          /*  if($_SESSION['user']){
                $data = array('error' => true,'msg'=> "user exist in session");
                return $response->withJson($data);
            }*/
            $_SESSION['user']=$user->id;
            $data = array('error' => false,'user' => $user);

            return $response->withJson($data);

        }else {
            // password valid
            $data = array('error' => true,'msg'=> "invalid   password for email  ".$user->email);
            return $response->withJson($data);

        }

    }
    public  function signup(Request $request, Response $response,Router $router){
        $email=$request->getParam("email");
        $password=$request->getParam("password");
        $name=$request->getParam("name");
        $type=$request->getParam("type");


        $user = User::firstOrCreate([
            'email' => $email,
            'password' => $password,
            'name' => $name,
            'type' => $type,
        ]);

        $data = array('error' => false,'msg' => $user->name . "  has been added successfully");

        return $response->withJson($data);


    }

    public function logOut(Request $request, Response $response,Router $router){
        unset($_SESSION['id']);
        $data = array('error' => false,'msg' => "logout  successful");

        return $response->withJson($data);
    }

}