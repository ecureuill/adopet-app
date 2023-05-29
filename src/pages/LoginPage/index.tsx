import { Button, Header, Logo, TextInput } from '../../components';
import data from '../../i18n/pt-br.json';
import './styles.css';

const LoginPage = (): JSX.Element => {
	return (
		<>
			<Header paws={true} />
			<main className='bg -body-bg-left -body-bg-paws'>
				<Logo />
				<p>{data.login_msg}</p>
				<form className='form -flex-column -flex-align-center -gap-big'>
					<TextInput label={data.email} placeholder={data.email_login_hint} align='center' labelColor='dark' type='email'/>
					<TextInput label={data.password} placeholder={data.password_login_hint} align='center' labelColor='dark' type='password'/>
					<a href='#'>{data.password_forget}</a>
					<Button type='submit' className='center'>{data.login}</Button>
				</form>
			</main>
		</>
	);
};

export default LoginPage;