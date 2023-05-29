import { PropsWithChildren } from 'react';
import './styles.css';

type TextProps = {
	variant: 'title' | 'body' | 'footer'
	size?: 'default' | 'small' | 'smaller'
	id?: string
};

const Text = ( {variant, size = 'default', children}: TextProps & PropsWithChildren): JSX.Element => {
	
	if(variant === 'title')
		return (
			<h1 className={`title -title-${size}`}>{children}</h1>
		);

	return (
		<p className={`body -body-${size}`}>{children}</p>
	);
};

export default Text;