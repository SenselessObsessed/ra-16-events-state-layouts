function IconSwitch({ icon, onSwitch }) {
	return (
		<span className='material-symbols-outlined' onClick={onSwitch}>
			{icon}
		</span>
	);
}

export default IconSwitch;
