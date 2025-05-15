import ShopItem from './ShopItem';

function ListView({ items }) {
	return (
		<div className='list-view'>
			{items.map((item, idx) => {
				return <ShopItem item={item} key={idx} />;
			})}
		</div>
	);
}

export default ListView;
