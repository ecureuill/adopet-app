import { faker } from '@faker-js/faker/locale/pt_BR';
import { useId } from 'react';
import { Button, Form, ImageUploader, Text, TextArea, TextInput } from '../../components';
import data from '../../i18n/pt-br.json';

const ProfileEditPage = (): JSX.Element => {
	const id= useId();

	return (
		<main>
			<p>{data.profile_msg}</p>
			<Form aria-labelledby={id} submitButtonLabel={data.save}>
				<Text id={id} variant={'title'} size={'small'}>{data.profile}</Text>
				<ImageUploader src={faker.image.avatar()} alt='some user' width={80} height={80}/>
				<TextInput variant='white' label={data.name}/>
				<TextInput variant='white' label={data.phone}/>
				<TextInput variant='white' label={data.city}/>
				<TextArea variant='white' label={data.about} rows={5}/>
			</Form>
		</main>
	);
};

export default ProfileEditPage;