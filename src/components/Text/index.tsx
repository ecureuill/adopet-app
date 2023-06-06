import { PropsWithChildren } from 'react';
import './styles.css';

type TextProps = {
	variant: 'title' | 'subtitle' | 'body' | 'footer'
	size?: 'default' | 'small' | 'smaller'
	id?: string
	className?: string
};

const Text = ( {variant, size = 'default', children, className='', id}: TextProps & PropsWithChildren): JSX.Element => {
	if(variant === 'title')
		return (
			<h1 id={id} className={`title -title-${size} ${className}`}>{children}</h1>
		);

	if(variant === 'subtitle')
		return (
			<h2 id={id} className={`subtitle -subtitle-${size} ${className}`}>{children}</h2>
		);

	return (
		<p id={id} className={`body -body-${size} ${className}`}>{children}</p>
	);
};

export default Text;