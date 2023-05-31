import { ComponentPropsWithoutRef, FormEvent, PropsWithChildren, SetStateAction, useState } from 'react';
import { FormDataState } from '../../utils/types';
import Button from '../Button';
import './styles.css';

type FormProps = {
	color?: 'default' | 'white',
	submitButtonLabel: string,
	setFormData: React.Dispatch<SetStateAction<{[key: string]: FormDataState}>>
	submitHandler: React.FormEventHandler<HTMLFormElement>
};


const Form = ( {setFormData, submitHandler, submitButtonLabel, color = 'default', children, className: styles = '', ...rest}: FormProps & ComponentPropsWithoutRef<'form'> & PropsWithChildren): JSX.Element => {

	const [ isValid, setIsValid ] = useState(false);

	const updateFormState = (event: FormEvent<HTMLFormElement>) => {
		if(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)
		{
			const target = event.target as HTMLInputElement;

			console.debug(target);
			setFormData((prev) => {

				return {
					...prev,
					[target.name]: {
						value: target.value,
						valid: target.validity.valid,
						errormessage: target.validationMessage
					},
				};
			});
		}
	};

	return (
		// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
		<form
			onSubmit={submitHandler} 
			onChange={(e) => {
				if(e.currentTarget.checkValidity())
					setIsValid(true);
				updateFormState(e);
			}}
			onBlur={updateFormState}
			className={`form -form-${color} -flex-column  -flex-align-center -gap-big ${styles}`}
		>
			{children}
			<Button type='submit' disabled={!isValid}>{submitButtonLabel}</Button>
		</form>
	);
};

export default Form;