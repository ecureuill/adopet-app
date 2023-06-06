import { faker } from '@faker-js/faker/locale/pt_BR';
import { UUID } from 'crypto';
import { useContext, useEffect, useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, ImageUploader, Text, TextArea, TextInput } from '../../components';
import { AuthContext } from '../../context/auth.context';
import data from '../../i18n/pt-br.json';
import { getOneBy, updateSome } from '../../services/api/tutor.api';
import { useTutorQuery } from '../../services/query-client';
import { bufferToURL } from '../../utils';
import { FormDataState, SubmitedStatus } from '../../utils/types';


const ProfileEditPage = (): JSX.Element => {
	const id= useId();
	const {user, updateUser} = useContext(AuthContext);
	const navigate = useNavigate();
	const { data: tutorQuery, status} = useTutorQuery(user!.id!);

	const [ submitStatus, setStatusMsg] = useState<SubmitedStatus>({status: 'not-submited'});

	const [formState, setFormState] = useState<{
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

		if(status === 'success'){
			setFormState({
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
		}	

	}, [status]);


	const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();	

		const formData = new FormData(event.currentTarget);

		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const resp = await updateSome(user!.id!, formData);

		if((resp).status === 200){
			setStatusMsg({status: 'success'});
			
			const name = formData.get('name');
			const photo = formData.get('photo') as File;
			
			if(name !== null){
				console.debug('name !== null');
				console.debug(name);
				updateUser({name: name});
			}

			if(photo !== null && photo.size > 0 && photo.type.startsWith('image')){
				const fr = new FileReader();
				fr.readAsArrayBuffer(photo as File);
				fr.onloadend = () =>{
					updateUser({photo: {data: fr.result}});
				};
			}
		}
		
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
				setFormData={setFormState}
				submitedStatus={submitStatus}
			>
				<Text id={id} variant={'title'} size={'small'}>{data.profile}</Text>
				<ImageUploader src={formState?.photo.file? URL.createObjectURL(formState?.photo.file) : formState.photo.value} alt='some user' width={80} height={80}/>
				<TextInput 
					name='name'
					value={formState?.name.value}
					required
					aria-required={true}
					aria-errormessage={formState?.name.errormessage}
					errormessage={formState?.name.errormessage}
					aria-invalid={!formState?.name.valid}
					label={data.name}
					variant='white' 
				/>
				<TextInput 
					name='phone'
					type='tel'
					value={formState?.phone.value}
					required
					aria-required={true}
					aria-errormessage={formState?.phone.errormessage}
					errormessage={formState?.phone.errormessage}
					aria-invalid={!formState?.phone.valid}
					label={data.phone}
					variant='white'
				/>
				<TextInput 
					name='city'
					value={formState?.city.value}
					required
					aria-required={true}
					aria-errormessage={formState?.city.errormessage}
					errormessage={formState?.city.errormessage}
					aria-invalid={!formState?.city.valid}
					label={data.city}
					variant='white'
				/>
				<TextArea 
					name='about'
					value={formState?.about.value}
					aria-errormessage={formState?.about.errormessage}
					errormessage={formState?.about.errormessage}
					aria-invalid={!formState?.about.valid}
					label={data.about}
					variant='white'
					rows={5}
				/>
			</Form>
		</main>
	);
};

export default ProfileEditPage;