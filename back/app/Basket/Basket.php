<?php

namespace Cart\Basket;

use Cart\Models\Image;
use Cart\Models\Product;
use Cart\Support\Storage\Contracts\StorageInterface;
use Cart\Basket\Exceptions\QuantityExceededException;

class Basket{

	protected $storage;
	protected $product;
	protected $image;

	public function __construct(StorageInterface $storage, Product $product,Image $image){
		$this->storage = $storage;
		$this->product = $product;
		$this->image=$image;
	}

	public function add(Product $product, $quantity){
		if ($this->has($product)) {
			$quantity = $this->get($product)['quantity'] + $quantity;
		}

		$this->update($product, $quantity);
	}

	public function update(Product $product, $quantity){
		if (!$this->product->find($product->id)->hasStock($quantity)) {
			throw new QuantityExceededException;
		}

		if ((int) $quantity === 0) {
			$this->remove($product);
			return;
		}

		$this->storage->set($product->id, [
			'product_id' => (int) $product->id,
			'quantity' => (int) $quantity,
		]);
	}

	public function remove(Product $product){
		$this->storage->remove($product->id);
	}

	public function has(Product $product){
		return $this->storage->exists($product->id);
	}

	public function get(Product $product){
		return $this->storage->get($product->id);
	}

	public function clear(){
		return $this->storage->clear();
	}
    public function allForAngular(){
        $ids = [];
        $items = [];

        foreach ($this->storage->all() as $product) {
            $ids[] = $product['product_id'];
        }

        $products = $this->product->find($ids);

        foreach ($products as $product) {
            $product->quantity = $this->get($product)['quantity'];



             $img=$this->image->where('product_id',$product->id)->first();
            $product->image=$img->title;
            // var_dump(  $this->get($product)['quantity']);

            $item=array('product'=>$product,'quantity'=>$this->get($product)['quantity']);
            $items[] = $item;
            /*var_dump($product);
            die();*/
        }


        return $items;
    }
	public function all(){
		$ids = [];
		$items = [];

		foreach ($this->storage->all() as $product) {
			$ids[] = $product['product_id'];
		}

		$products = $this->product->find($ids);

		foreach ($products as $product) {
			$product->quantity = $this->get($product)['quantity'];
			$items[] = $product;
		}

		return $items;
	}

	public function itemCount(){
		return count($this->storage);
	}

	public function subTotal(){
		$total = 0;

		foreach ($this->all() as $item) {
			if ($item->outOfStock()) {
				continue;
			}

			$total += ($item->price * $item->quantity);
		}

		return $total;
	}

	public function refresh(){
		foreach($this->all() as $item){
			if(!$item->hasStock($item->quantity)){
				$this->update($item, $item->stock);
			}
		}
	}

}
