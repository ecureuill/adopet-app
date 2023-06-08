import './styles.css';

const Button = ( {className: styles, ...rest}: React.ComponentPropsWithoutRef<'button'>): JSX.Element => {

	return <button className={`btn ${styles}`} {...rest} />;
};

export default Button;
