import { FormEvent } from 'react';
import { Button, Form, Header, Logo, TextInput } from '../../components';
import data from '../../i18n/pt-br.json';

const SignUpPage = (): JSX.Element => {
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
					submitHandler={(event: FormEvent<HTMLFormElement>) => {
						throw new Error('Function not implemented.');
					} } 
					onFormInvalid={(event: FormEvent<HTMLFormElement>) => {
						throw new Error('Function not implemented.');
					} }>
					<TextInput label={data.email} placeholder={data.email_signup_hint} type='email' labelColor='dark' align='center' />
					<TextInput label={data.name} placeholder={data.name_signup_hint} labelColor='dark' align='center' />
					<TextInput label={data.password} placeholder={data.password_signup_hint} type='password' labelColor='dark' align='center' />
					<TextInput label={data.password_confirm} placeholder={data.password_signup_confirm_hint} type='password' labelColor='dark' align='center' />
				</Form>
			</main>
		</>
	);
};

export default SignUpPage;