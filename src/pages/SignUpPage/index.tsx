import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Header, Logo, TextInput } from '../../components';
import data from '../../i18n/pt-br.json';
import { signUpTutor } from '../../services/api/user.api';
import { FormDataState } from '../../utils/types';

const SignUpPage = (): JSX.Element => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState<{
		[key: string]: FormDataState,
	}>({
		name: {
			valid: false,
			value: '', 
		},
		email: {
			valid: false,
			value: '', 
		},
		password: {
			valid: false,
			value: '', 
		},
		password_confirm: {
			valid: false,
			value: '', 
		}
	});

	const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();	

		const formData = new FormData(event.currentTarget);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const name = formData.get('name') as string;

		if(await signUpTutor(email, password, name)){
			navigate('/login', { replace: true });
		}
	};

	return (
		<>
			<Header paws={true} />
			<main className='bg -body-bg-left'>
				<Logo />
				<span>
					<p>{data.signup_msg_question}</p>
					<p>{data.signup_msg_answer}</p>
				</span>
				<Form 
					color='white'
					submitButtonLabel={data.signup}
					submitHandler={submitHandler} 
					setFormData={setFormData}
				>
					<TextInput 
						name='email'
						value={formData?.email.value}
						placeholder={data.email_signup_hint}
						type='email'
						required
						aria-required={true}
						aria-errormessage={formData?.email.errormessage}
						errormessage={formData?.email.errormessage}
						aria-invalid={!formData?.email.valid}
						label={data.email}
						labelColor='dark'
						variant='white'
						align='center'  
					/>
					<TextInput 
						name='name'
						value={formData?.name.value}
						placeholder={data.name_signup_hint}
						required
						aria-required={true}
						aria-errormessage={formData?.name.errormessage}
						errormessage={formData?.name.errormessage}
						aria-invalid={!formData?.name.valid}
						label={data.name}
						labelColor='dark'
						variant='white'
						align='center'  
					/>
					<TextInput 
						name='password'
						value={formData?.password.value}
						placeholder={data.password_signup_hint}
						type='password'
						minLength={8}
						required
						aria-required={true}
						aria-errormessage={formData?.password.errormessage}
						errormessage={formData?.password.errormessage}
						aria-invalid={!formData?.password.valid}
						label={data.password}
						labelColor='dark'
						variant='white'
						align='center'  
					/>
					<TextInput 
						name='password_confirm'
						value={formData?.password_confirm.value}
						placeholder={data.password_signup_confirm_hint}
						type='password'
						minLength={8}
						required
						aria-required={true}
						aria-errormessage={formData?.password_confirm.errormessage}
						errormessage={formData?.password_confirm.errormessage}
						aria-invalid={!formData?.password_confirm.valid}
						label={data.password_confirm}
						labelColor='dark'
						variant='white'
						align='center'  
					/>
				</Form>
			</main>
		</>
	);
};

export default SignUpPage;