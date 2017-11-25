<?php
/**
 * Created by PhpStorm.
 * User: axeleate
 * Date: 09/09/2017
 * Time: 17:55
 */

namespace Cart\Controllers;


use Cart\Models\User;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\RequestInterface as Request;
use Slim\Router;



class UserController
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function getUser($id, Request $request, Response $response, Router $router)
    {
        $user = $this->user->where('id',$id)->first();
        if (!$user) {
            // mesh mawjoud :D
            $data = array('users' => true, $user);
            return $response->withJson($data);
        }
        $data = array('users' => true, $user);
        return $response->withJson($data);


    }
}
