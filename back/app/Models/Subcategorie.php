<?php
/**
 * Created by PhpStorm.
 * User: axeleate
 * Date: 03/09/2017
 * Time: 02:06
 */

namespace Cart\Models;


use Illuminate\Database\Eloquent\Model;

class Subcategorie extends Model
{
    protected $fillable = [
        'title',
        'categorie_id',
    ];



    function products(){
        return $this->hasMany(Product::class);
    }

}