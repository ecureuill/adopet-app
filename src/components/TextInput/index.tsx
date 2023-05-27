import { useId } from 'react';

export interface TextInputProps extends React.ComponentPropsWithoutRef<'input'> {
	label: string,
} 
const TextInput = ( props: TextInputProps): JSX.Element => {
	const id = useId();
	const {label, className: styles, ...rest} = props;

	return (
		<div className='-flex-column -gap-small'>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...rest} className={`txt ${styles}`} />
		</div>
	);
};

export default TextInput;