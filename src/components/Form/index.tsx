import { Children, ComponentPropsWithoutRef, PropsWithChildren, PropsWithoutRef } from 'react';
import Button from '../Button';
import './styles.css';

type FormProps = {
	color?: 'default' | 'white',
	submitButtonLabel: string
};

const Form = ( {submitButtonLabel, color = 'default', children, className: styles = '', ...rest}: FormProps & ComponentPropsWithoutRef<'form'> & PropsWithChildren): JSX.Element => {
	return (
		<form className={`form -form-${color} -flex-column  -flex-align-center -gap-big ${styles}`}>
			{children}
			<Button type='submit'>{submitButtonLabel}</Button>
		</form>
	);
};

export default Form;