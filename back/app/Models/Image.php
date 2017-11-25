<?php
/**
 * Created by PhpStorm.
 * User: axeleate
 * Date: 02/09/2017
 * Time: 13:41
 */

namespace Cart\Models;


use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'title',
        'product_id',
    ];

    public function product(){
        return $this->belongsTo(Product::class);
    }

}