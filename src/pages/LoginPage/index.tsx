import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Logo, TextInput } from '../../components';
import { AuthContext } from '../../context/auth.context';
import data from '../../i18n/pt-br.json';
import { FormDataState, SubmitedStatus } from '../../utils/types';
import './styles.css';

const LoginPage = (): JSX.Element => {
	const navigate = useNavigate();
	const location = useLocation();
	const authContext = useContext(AuthContext);

	const [ submitStatus, setStatusMsg] = useState<SubmitedStatus>({status: 'not-submited'});
	const [formData, setFormData] = useState<{
		[key: string]: FormDataState,
	}>({
		email: {
			valid: false,
			value: '', 
		},
		password: {
			valid: false,
			value: '', 
		}
	});

	const from = location.state?.from?.pathname || '/';

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
	};

	useEffect(() => {
		if(authContext.error !== '')
			setStatusMsg({
				status: 'failed',
				message: authContext.error
			});
	}, [authContext.error]);

	return (
		<main className='bg -body-bg-left -body-bg-paws'>
			<Logo />
			<p>{data.login_msg}</p>
			<Form 
				color='white'
				submitButtonLabel={data.login}
				submitHandler={(event) => handleSubmit(event)}
				setFormData={setFormData} 
				submitedStatus={submitStatus}
			>
				<TextInput 
					name='email' 
					label={data.email} 
					type='email'
					value={formData?.email.value}
					placeholder={data.email_login_hint} 
					required
					aria-required={true}
					aria-errormessage={formData?.email.errormessage}
					errormessage={formData?.email.errormessage}
					aria-invalid={!formData?.email.valid}
					align='center' 
					labelColor='dark' 
				/>
				<TextInput 
					name='password' 
					label={data.password} 
					type='password'
					value={formData?.password.value}
					placeholder={data.password_login_hint} 
					required
					aria-required={true}
					aria-errormessage={formData?.password.errormessage}
					errormessage={formData?.password.errormessage}
					aria-invalid={!formData?.password.valid}
					align='center' 
					labelColor='dark' 
				/>
				<a href='/forget'>{data.password_forget}</a>
			</Form>
		</main>
	);
};

export default LoginPage;