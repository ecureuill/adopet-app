import { faker } from '@faker-js/faker/locale/pt_BR';
import { UUID } from 'crypto';
import { useContext, useEffect, useId, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Form, ImageUploader, Text, TextArea, TextInput } from '../../components';
import { AuthContext } from '../../context/auth.context';
import data from '../../i18n/pt-br.json';
import { getOneBy, updateSome } from '../../services/api/tutor.api';
import { bufferToURL } from '../../utils';
import { FormDataState, SubmitedStatus } from '../../utils/types';


const ProfileEditPage = (): JSX.Element => {
	const id= useId();
	const authctx = useContext(AuthContext);
	const navigate = useNavigate();
	const { data: tutorQuery, status} = useQuery<any, Error>('tutor', () => getOneBy(authctx.user!.id!));

	const [ submitStatus, setStatusMsg] = useState<SubmitedStatus>({status: 'not-submited'});

	const [formData, setFormData] = useState<{
		[key: string]: FormDataState,
	}>({
		name: {
			valid: false,
			value: '' 
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
		},
		photo: {
			valid: true,
			value: '', 
		}
	});

	useEffect(() => {

		if(status === 'success')
			setFormData({
				name: {
					valid: !!tutorQuery.data.user.name,
					value: tutorQuery.data.user.name 
				},
				phone: {
					valid: !!tutorQuery.data.user.phone,
					value: tutorQuery.data.user.phone, 
				},
				city: {
					valid: !!tutorQuery.data.user.city,
					value: tutorQuery.data.user.city, 
				},
				about: {
					valid: !!tutorQuery.data.about,
					value: tutorQuery.data.about, 
				},
				photo: {
					valid: !!tutorQuery.data.user.photo,
					value: tutorQuery.data.user.photo? bufferToURL(tutorQuery.data.user.photo.data): faker.image.avatar(), 
				}
			});

	}, [status]);


	const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();	

		const formData = new FormData(event.currentTarget);
		const phone = formData.get('phone') as string;
		const city = formData.get('city') as string;
		const name = formData.get('name') as string;
		const about = formData.get('about') as string;
		const photo = formData.get('photo') as File;

		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const resp = await updateSome(authctx.user!.id!, formData);

		if((resp).status === 200)
			setStatusMsg({status: 'success'});
		
		else if((resp as any).redirect)
			navigate('ops',{ 
				replace: true
			});
		
		else
			setStatusMsg({status: 'failed', message: (resp as any).error.message});
	};

	return (
		<main>
			<Text variant='body'>{data.profile_msg}</Text>
			<Form 
				aria-labelledby={id}
				submitButtonLabel={data.save}
				submitHandler={submitHandler} 
				setFormData={setFormData}
				submitedStatus={submitStatus}
			>
				<Text id={id} variant={'title'} size={'small'}>{data.profile}</Text>
				<ImageUploader src={formData?.photo.file? URL.createObjectURL(formData?.photo.file) : formData.photo.value} alt='some user' width={80} height={80}/>
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
	);
};

const fetch = async (id: UUID) => {
	return( (await getOneBy(id)).data);

};

export default ProfileEditPage;