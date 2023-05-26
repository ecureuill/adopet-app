import './styles.css';

const Button = ( props: React.ComponentPropsWithoutRef<'button'>): JSX.Element => {

	return <button className='btn' {...props} />;
};

export default Button;
