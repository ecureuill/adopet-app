import { ComponentPropsWithoutRef, FormEvent, PropsWithChildren, SetStateAction, useId, useState } from 'react';
import { FormDataState, SubmitedStatus } from '../../utils/types';
import Button from '../Button';
import './styles.css';
import data from '../../i18n/pt-br.json';

type FormProps = {
	color?: 'default' | 'white',
	submitButtonLabel: string,
	setFormData: React.Dispatch<SetStateAction<{[key: string]: FormDataState}>>
	submitHandler: React.FormEventHandler<HTMLFormElement>
	submitedStatus: SubmitedStatus,
};


const Form = ( {submitedStatus, setFormData, submitHandler, submitButtonLabel, color = 'default', children, className: styles = '', ...rest}: FormProps & ComponentPropsWithoutRef<'form'> & PropsWithChildren): JSX.Element => {

	const id = useId();
	const [ isValid, setIsValid ] = useState(false);

	const updateFormState = (event: FormEvent<HTMLFormElement>) => {
		if(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)
		{
			const target = event.target as HTMLInputElement;

			setFormData((prev) => {

				return {
					...prev,
					[target.name]: {
						value: target.files? URL.createObjectURL(target.files[0]): target.value,
						file: target.files? target.files[0]: undefined,
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
			id={id}
			name={`form-${id}`}
			onSubmit={submitHandler} 
			onChange={(e) => {
				submitedStatus.status = 'not-submited';
				submitedStatus.message = undefined;
				setIsValid(e.currentTarget.checkValidity());
				updateFormState(e);
			}}
			onBlur={(e) => {
				submitedStatus.status = 'not-submited';
				submitedStatus.message = undefined;
				setIsValid(e.currentTarget.checkValidity());
				updateFormState(e);
			}}
			className={`form -form-${color} -flex-column  -flex-align-center -gap-big ${styles}`}
			{...rest}
		>
			{children}
			<Button type='submit' disabled={!isValid}>{submitButtonLabel}</Button>
			{
				submitedStatus.status !== 'not-submited' &&
				<label htmlFor={id}>
					{
						submitedStatus.status === 'success'? 
							data.submited_successfully
							:
							<span>{data.submited_unsuccessfully}<br/>{submitedStatus.message}</span>	
					}
				</label>	
			}
		</form>
	);
};

export default Form;