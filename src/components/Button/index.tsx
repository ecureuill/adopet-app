import './styles.css';

type ButtonProps = {
	size?: 'default' | 'medium' | 'full'
}

const Button = ( {size = 'default', className: styles, ...rest}: ButtonProps & React.ComponentPropsWithoutRef<'button'>): JSX.Element => {

	return <button className={`btn -btn-size-${size} ${styles}`} {...rest} />;
};

export default Button;
