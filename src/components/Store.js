import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Store({ products }) {
	const [view, setView] = useState('view_list');
	const switchView = event => {
		if (event.target.innerText === 'view_list') {
			setView('view_module');
		} else {
			setView('view_list');
		}
	};

	return (
		<>
			<IconSwitch icon={view} onSwitch={switchView} />
			{view === 'view_list' ? (
				<CardsView cards={products} />
			) : (
				<ListView items={products} />
			)}
		</>
	);
}

Store.propTypes = {
	products: PropTypes.array.isRequired,
};

export default Store;
