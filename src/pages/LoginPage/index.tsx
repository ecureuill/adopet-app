import { FormEvent } from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form, Header, Logo, TextInput } from '../../components';
import { AuthContext } from '../../context/auth.context';
import data from '../../i18n/pt-br.json';
import './styles.css';

const LoginPage = (): JSX.Element => {
	const navigate = useNavigate();
	const location = useLocation();
	const authContext = useContext(AuthContext);

	const from = location.state?.from?.pathname || '/';

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		console.debug(from);
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		if(await authContext.signIn(email, password)){
			if(from === '/')
				navigate('/pets', { replace: true });
			else 
				navigate(from, { replace: true });
		}
		else
		{
			console.debug(authContext.error);
		}
	};

	return (
		<>
			<Header paws={true} />
			<main className='bg -body-bg-left -body-bg-paws'>
				<Logo />
				<p>{data.login_msg}</p>
				<Form 
					color='white'
					submitButtonLabel={data.login}
					submitHandler={(event) => handleSubmit(event)} 
					onFormInvalid={(event: FormEvent<HTMLFormElement>) => {
						throw new Error('Function not implemented.');
					} }>
					<TextInput name='email' label={data.email} placeholder={data.email_login_hint} align='center' labelColor='dark' type='email'/>
					<TextInput name='password' label={data.password} placeholder={data.password_login_hint} align='center' labelColor='dark' type='password'/>
					<a href='/forget'>{data.password_forget}</a>
				</Form>
			</main>
		</>
	);
};

export default LoginPage;