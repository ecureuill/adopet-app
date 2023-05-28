import { faker } from '@faker-js/faker/locale/pt_BR';
import { useId } from 'react';
import { Button, ImageUploader, TextArea, TextInput } from '../../components';
import data from '../../i18n/pt-br.json';

const ProfileEditPage = (): JSX.Element => {
	const id= useId();

	return (
		<main>
			<p>{data.profile_msg}</p>
			<form aria-labelledby={id} className='form -flex-column -gap-big'>
				<p id={id}>{data.profile}</p>
				<ImageUploader src={faker.image.avatar()} alt='some user' width={80} height={80}/>
				<TextInput label={data.name}/>
				<TextInput label={data.phone}/>
				<TextInput label={data.city}/>
				<TextArea label={data.about} rows={5}/>
				<Button type='submit'>{data.save}</Button>
			</form>
		</main>
	);
};

export default ProfileEditPage;