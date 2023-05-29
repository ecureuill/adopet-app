import { useId } from 'react';
import './styles.css';

export interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
	label: string,
	variant?: 'default' | 'white',
	align?: 'default' | 'center',
} 
const TextArea = ( {variant = 'default', align = 'default', label, className: styles = '',...rest}: TextAreaProps): JSX.Element => {
	const id = useId();

	return (
		<div className='textarea-wrapper -flex-column -gap-small'>
			<label htmlFor={id} className={`label -label-${align}`}>{label}</label>
			<textarea id={id} {...rest} className={`textarea -textarea-${variant} -textarea-${align} ${styles}`} />
		</div>
	);
};

export default TextArea;