import ShopCard from './ShopCard';

function CardsView({ cards }) {
	return (
		<div className='cards-view'>
			{cards.map((card, idx) => {
				return <ShopCard card={card} key={idx} />;
			})}
		</div>
	);
}

export default CardsView;
