import { Link, LinkProps } from 'react-router-dom';
import './styles.css';

const Button = ( {className: styles, ...rest}: LinkProps & React.RefAttributes<HTMLAnchorElement>): JSX.Element => {

	return <Link className={`link-btn ${styles}`} {...rest} />;
};

export default Button;
