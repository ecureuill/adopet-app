import { useId } from 'react';
import './styles.css';

export interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
	label: string,
	variant?: 'default' | 'white',
	align?: 'default' | 'center',
	errormessage?: string
} 
const TextArea = ( {errormessage, variant = 'default', align = 'default', label, className: styles = '',...rest}: TextAreaProps): JSX.Element => {
	const id = useId();
	const id2 = useId();

	return (
		<div className='textarea-wrapper -flex-column -gap-small'>
			<label htmlFor={id} className={`label -label-${align}`}>{label}</label>
			<textarea 
				{...rest} 
				id={id} 
				className={`textarea -textarea-${variant} -textarea-${align} ${styles}`}
			/>			
			<div aria-live='polite'>
				<label id={id2} className='errormessage' aria-label='email'>{errormessage}</label>
			</div>
		</div>
	);
};

export default TextArea;