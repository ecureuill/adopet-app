import { Button, Logo, TextArea, TextInput } from '../../components';
import data from '../../i18n/pt-br.json';

const SentMessagePage = (): JSX.Element => {
	return (
		<main>
			<Logo />
			<span>
				<p>{data.sent_msg}</p>
			</span>
			<form className='form -flex-column -gap-big'>
				<TextInput label={data.name}/>
				<TextInput label={data.phone}/>
				<TextInput label={data.pet_name}/>
				<TextArea label={data.message} rows={5}/>
				<Button type='submit'>{data.send}</Button>
			</form>
		</main>
	);
};

export default SentMessagePage;