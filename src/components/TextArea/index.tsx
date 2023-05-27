import { useId } from 'react';

export interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
	label: string,
} 
const TextArea = ( props: TextAreaProps): JSX.Element => {
	const id = useId();
	const {label, className: styles,...rest} = props;

	return (
		<div className='-flex-column -gap-small'>
			<label htmlFor={id}>{label}</label>
			<textarea id={id} {...rest} className={`txt ${styles}`} />
		</div>
	);
};

export default TextArea;