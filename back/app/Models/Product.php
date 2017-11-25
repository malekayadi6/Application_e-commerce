<?php

namespace Cart\Models;

use Cart\Models\Order;
use Illuminate\Database\Eloquent\Model;

class Product extends Model{

	public $quantity = 0;
    protected $fillable = [
        'title',
        'description',
        'price',
        'stock',
        'subcategorie_id',
    ];


    public function hasLowStock(){
		if ($this->outOfStock()) {
			return false;
		}

		return (bool) ($this->stock <= 5);
	}


	public function outOfStock(){
		return $this-> stock === 0;
	}

	public function inStock(){
		return $this-> stock >= 1;
	}

	public function hasStock($quantity){
		return $this-> stock >= $quantity;
	}

	public function order(){
		return $this->belongsTo(Order::class, 'orders_products')->withPivot('quantity');
	}
    public function image(){
        return $this->hasMany(Image::class);
    }

}
