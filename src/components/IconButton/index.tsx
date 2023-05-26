import './styles.css';

interface IconButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	icon: JSX.Element,
	ariaLabel: string,
}

const IconButton = ( props: IconButtonProps): JSX.Element => {

	const {icon, ...rest} = props;
	return( 
		<button className='btn -icon' {...rest}>
			{icon}
		</button>
	);
};

export default IconButton;
