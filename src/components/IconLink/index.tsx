import { PropsWithChildren } from 'react';
import './styles.css';

type IconLinkProps = {
	link: string;
	label: string;
	onlyIcon?: boolean
};

const IconLink = ( {onlyIcon=false, link, label, children}: IconLinkProps & PropsWithChildren): JSX.Element => {

	if(onlyIcon)
		return(
			<a href={link} aria-label={label}>{children}</a>
		);

	return (
		<div className='ilink-wrapper'>
			{children}
			<a href={link}>{label}</a>
		</div>
	);
};

export default IconLink;