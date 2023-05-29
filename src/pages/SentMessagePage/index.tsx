import { Button, Form, Header, Logo, Text, TextArea, TextInput } from '../../components';
import data from '../../i18n/pt-br.json';

const SentMessagePage = (): JSX.Element => {
	return (
		<>
			<Header />
			<main>
				<Text variant='body'>{data.	sent_msg}</Text>
				<Form color='default' submitButtonLabel={data.send}>
					<TextInput variant='white' label={data.name} placeholder={data.name_hint}/>
					<TextInput variant='white' label={data.phone} placeholder={data.phone_hint}/>
					<TextInput variant='white' label={data.pet_name} placeholder={data.pet_name_hint}/>
					<TextArea variant='white' label={data.message}  placeholder={data.message_hint} rows={5}/>
				</Form>
			</main>
		</>
	);
};

export default SentMessagePage;