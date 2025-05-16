import ShopItem from './ShopItem';
import PropTypes from 'prop-types';

function ListView({ items }) {
	return (
		<div className='list-view'>
			{items.map((item, idx) => {
				return <ShopItem item={item} key={idx} />;
			})}
		</div>
	);
}

ListView.propTypes = {
	items: PropTypes.array.isRequired,
};

export default ListView;
