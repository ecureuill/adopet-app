import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

type IconLinkProps = {
	link: string;
	label: string;
	onlyIcon?: boolean
};

const IconLink = ( {onlyIcon=false, link, label, children}: IconLinkProps & PropsWithChildren): JSX.Element => {

	if(onlyIcon)
		return(
			<Link to={link} aria-label={label}>{children}</Link>
		);

	return (
		<div className='ilink-wrapper'>
			{children}
			<Link to={link} >{label}</Link>
		</div>
	);
};

export default IconLink;