function ShopItem({ item }) {
	return (
		<div className='item'>
			<img className='item-image' src={item.img} alt={item.color} />
			<div className='item-name'>{item.name}</div>
			<div className='color'>{item.color}</div>
			<div className='item-price'>${item.price}</div>
			<button className='item-btn'>Add to cart</button>
		</div>
	);
}

export default ShopItem;
