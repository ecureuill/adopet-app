import { FormEvent, useState } from 'react';
import { Form, Text, TextArea, TextInput } from '../../components';
import data from '../../i18n/pt-br.json';
import { FormDataState } from '../../utils/types';

const SentMessagePage = (): JSX.Element => {

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
		pet_name: {
			valid: false,
			value: '', 
		},
		message: {
			valid: false,
			value: '', 
		}
	});

	return (
		<main>
			<Text variant='body'>{data.sent_msg}</Text>
			<Form 
				color='default'
				submitButtonLabel={data.send} 
				submitHandler={(event: FormEvent<HTMLFormElement>) => {
					throw new Error('Function not implemented.');
				} }
				setFormData={setFormData}
				submitedStatus={{status: 'not-submited'}}
			>
				<TextInput 
					name='name'
					value={formData?.name.value}
					placeholder={data.name_hint}
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
					placeholder={data.phone_hint}
					required
					aria-required={true}
					aria-errormessage={formData?.phone.errormessage}
					errormessage={formData?.phone.errormessage}
					aria-invalid={!formData?.phone.valid}
					label={data.phone}
					variant='white'
				/>
				<TextInput 
					name='pet_name'
					value={formData?.pet_name.value}
					placeholder={data.pet_name_hint}
					required
					aria-required={true}
					aria-errormessage={formData?.pet_name.errormessage}
					errormessage={formData?.pet_name.errormessage}
					aria-invalid={!formData?.pet_name.valid}
					label={data.pet_name}
					variant='white'
				/>
				<TextArea 
					name='message'
					value={formData?.message.value}
					placeholder={data.message_hint}
					required
					aria-required={true}
					aria-errormessage={formData?.message.errormessage}
					errormessage={formData?.message.errormessage}
					aria-invalid={!formData?.message.valid}
					label={data.message}
					variant='white'
					rows={5}
				/>
			</Form>
		</main>
	);
};

export default SentMessagePage;