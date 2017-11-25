<?php
/**
 * Created by PhpStorm.
 * User: axeleate
 * Date: 03/09/2017
 * Time: 02:05
 */

namespace Cart\Models;


use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    protected $fillable = [
        'title',
        'img1',
        'img2',
    ];
    function subcategories(){
        return $this->hasMany(Subcategorie::class);
    }
}