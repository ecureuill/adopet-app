import { Button, Logo, TextInput } from '../../components';
import data from '../../i18n/pt-br.json';

const SignUpPage = (): JSX.Element => {
	return (
		<main className='bg -body-bg-left'>
			<Logo />
			<span>
				<p>{data.signup_msg_question}</p>
				<p>{data.signup_msg_answer}</p>
			</span>
			<form className='form -flex-column -gap-big'>
				<TextInput label={data.email} type='email'/>
				<TextInput label={data.name}/>
				<TextInput label={data.password} type='password'/>
				<TextInput label={data.password_confirm} type='password'/>
				<Button type='submit'>{data.signup}</Button>
			</form>
		</main>
	);
};

export default SignUpPage;