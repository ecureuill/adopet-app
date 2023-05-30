import { FormEvent } from 'react';
import { Button, Form, Header, Logo, TextInput } from '../../components';
import data from '../../i18n/pt-br.json';
import './styles.css';

const LoginPage = (): JSX.Element => {
	return (
		<>
			<Header paws={true} />
			<main className='bg -body-bg-left -body-bg-paws'>
				<Logo />
				<p>{data.login_msg}</p>
				<Form 
					color='white'
					submitButtonLabel={data.login}
					submitHandler={(event: FormEvent<HTMLFormElement>) => {
						throw new Error('Function not implemented.');
					} } 
					onFormInvalid={(event: FormEvent<HTMLFormElement>) => {
						throw new Error('Function not implemented.');
					} }>
					<TextInput label={data.email} placeholder={data.email_login_hint} align='center' labelColor='dark' type='email'/>
					<TextInput label={data.password} placeholder={data.password_login_hint} align='center' labelColor='dark' type='password'/>
					<a href='#'>{data.password_forget}</a>
				</Form>
			</main>
		</>
	);
};

export default LoginPage;