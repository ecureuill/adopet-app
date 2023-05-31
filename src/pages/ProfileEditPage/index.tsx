import { faker } from '@faker-js/faker/locale/pt_BR';
import { FormEvent, useId, useState } from 'react';
import { Form, Header, ImageUploader, Text, TextArea, TextInput } from '../../components';
import data from '../../i18n/pt-br.json';
import { FormDataState } from '../../utils/types';

const ProfileEditPage = (): JSX.Element => {
	const id= useId();

	const [formData, setFormData] = useState<{
		[key: string]: FormDataState,
	}>({
		name: {
			valid: false,
			value: '', 
		},
		phone: {
			valid: false,
			value: '', 
		},
		city: {
			valid: false,
			value: '', 
		},
		about: {
			valid: true,
			value: '', 
		}
	});

	return (
		<>
			<Header/>
			<main>
				<Text variant='body'>{data.profile_msg}</Text>
				<Form 
					aria-labelledby={id}
					submitButtonLabel={data.save}
					submitHandler={(event: FormEvent<HTMLFormElement>) => {
						throw new Error('Function not implemented.');
					} } 
					setFormData={setFormData} 				>
					<Text id={id} variant={'title'} size={'small'}>{data.profile}</Text>
					<ImageUploader src={faker.image.avatar()} alt='some user' width={80} height={80}/>
					<TextInput 
						name='name'
						value={formData?.name.value}
						required
						aria-required={true}
						aria-errormessage={formData?.name.errormessage}
						errormessage={formData?.name.errormessage}
						aria-invalid={!formData?.name.valid}
						label={data.name}
						variant='white' 
					/>
					<TextInput 
						name='phone'
						value={formData?.phone.value}
						required
						aria-required={true}
						aria-errormessage={formData?.phone.errormessage}
						errormessage={formData?.phone.errormessage}
						aria-invalid={!formData?.phone.valid}
						label={data.phone}
						variant='white'
					/>
					<TextInput 
						name='city'
						value={formData?.city.value}
						required
						aria-required={true}
						aria-errormessage={formData?.city.errormessage}
						errormessage={formData?.city.errormessage}
						aria-invalid={!formData?.city.valid}
						label={data.city}
						variant='white'
					/>
					<TextArea 
						name='about'
						value={formData?.about.value}
						aria-errormessage={formData?.about.errormessage}
						errormessage={formData?.about.errormessage}
						aria-invalid={!formData?.about.valid}
						label={data.about}
						variant='white'
						rows={5}
					/>
				</Form>
			</main>
		</>
	);
};

export default ProfileEditPage;