<?php
/**
 * Created by PhpStorm.
 * User: axeleate
 * Date: 09/09/2017
 * Time: 14:06
 */

namespace Cart\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = [
        'type',
        'name',
        'password',
        'email',
    ];

}