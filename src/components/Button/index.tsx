import './styles.css';

const Button = ( props: React.ComponentPropsWithoutRef<'button'>): JSX.Element => {

	const { className: styles, ...rest } = props;
	return <button className={`btn ${styles}`} {...rest} />;
};

export default Button;
