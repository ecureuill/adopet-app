import { useId } from 'react';

export interface TextInputProps extends React.ComponentPropsWithoutRef<'input'> {
	label: string,
} 
const TextInput = ( props: TextInputProps): JSX.Element => {
	const id = useId();
	const {label, ...rest} = props;

	return (
		<div className='-flex-column -gap-small'>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...rest} className={'txt'} />
		</div>
	);
};

export default TextInput;