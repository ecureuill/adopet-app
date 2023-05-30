import { ComponentPropsWithoutRef, PropsWithChildren, useState } from 'react';
import Button from '../Button';
import './styles.css';

type FormProps = {
	color?: 'default' | 'white',
	submitButtonLabel: string,
	submitHandler: React.FormEventHandler<HTMLFormElement>
	onFormInvalid: React.FormEventHandler<HTMLFormElement>
};

const Form = ( {submitHandler, onFormInvalid, submitButtonLabel, color = 'default', children, className: styles = '', ...rest}: FormProps & ComponentPropsWithoutRef<'form'> & PropsWithChildren): JSX.Element => {

	const [ isValid, setIsValid ] = useState(false);

	return (
		// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
		<form
			onSubmit={submitHandler} 
			onInvalid={onFormInvalid}
			onBlur={(e) =>  setIsValid(e.target.checkValidity())}
			className={`form -form-${color} -flex-column  -flex-align-center -gap-big ${styles}`}
		>
			{children}
			<Button type='submit' disabled={!isValid}>{submitButtonLabel}</Button>
		</form>
	);
};

export default Form;