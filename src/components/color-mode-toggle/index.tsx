interface ToggleProps {
	handleChange: any;
	isChecked: boolean;
}

const ColorModeToggle = ({ handleChange, isChecked }: ToggleProps) => {
	return (
		<div className='toggle-container'>
			<input
				type='checkbox'
				id='check'
				className='toggle'
				onChange={handleChange}
				checked={isChecked}
			/>
			<label htmlFor='check'>Dark Mode</label>
		</div>
	);
};

export default ColorModeToggle;
