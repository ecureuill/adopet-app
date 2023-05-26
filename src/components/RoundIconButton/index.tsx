import './styles.css';

interface ManuButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	icon: JSX.Element,
	ariaLabel: string,
}

const ManuButton = ( props: ManuButtonProps): JSX.Element => {

	const {icon, ...rest} = props;
	return( 
		<button className='btn -icon -round' {...rest}>
			{icon}
		</button>
	);
};

export default ManuButton;
