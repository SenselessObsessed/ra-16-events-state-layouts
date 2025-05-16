import PropTypes from 'prop-types';

function IconSwitch({ icon, onSwitch }) {
	return (
		<span className='material-symbols-outlined' onClick={onSwitch}>
			{icon}
		</span>
	);
}

IconSwitch.propTypes = {
	icon: PropTypes.string.isRequired,
	onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
