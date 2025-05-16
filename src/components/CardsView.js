import ShopCard from './ShopCard';
import PropTypes from 'prop-types';

function CardsView({ cards }) {
	return (
		<div className='cards-view'>
			{cards.map((card, idx) => {
				return <ShopCard card={card} key={idx} />;
			})}
		</div>
	);
}

CardsView.propTypes = {
	cards: PropTypes.array.isRequired,
};

export default CardsView;
