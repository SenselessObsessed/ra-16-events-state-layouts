function ShopCard({ card }) {
	return (
		<div className='card'>
			<div className='card-name'>{card.name}</div>
			<div className='card-color'>{card.color}</div>
			<img src={card.img} alt={card.color} className='card-image' />
			<div className='card-price-and-btn'>
				<div className='card-price'>${card.price}</div>
				<button className='card-btn'>Add to cart</button>
			</div>
		</div>
	);
}

export default ShopCard;
