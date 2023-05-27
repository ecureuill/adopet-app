import { Button, Logo, TextInput } from '../../components';
import data from '../../i18n/pt-br.json';
import './styles.css';

const LoginPage = (): JSX.Element => {
	return (
		<main>
			<Logo />
			<p>{data.login_msg}</p>
			<form className='form -flex-column -gap-big'>
				<TextInput label={data.email} type='email'/>
				<TextInput label={data.password} type='password'/>
				<a className='password-forget' href='#'>{data.password_forget}</a>
				<Button type='submit'>{data.login}</Button>
			</form>
		</main>
	);
};

export default LoginPage;