import { faker } from '@faker-js/faker';
import { useContext, useEffect, useId, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Form, ImageUploader, Text, TextArea, TextInput } from '../../components';
import { AuthContext } from '../../context/auth.context';
import data from '../../i18n/pt-br.json';
import { updateSome } from '../../services/api/tutor.api';
import { useTutorQuery } from '../../services/query-client';
import { bufferToURL } from '../../utils';
import { useMobileMediaQuery } from '../../utils/media-queries';
import { FormDataState, SubmitedStatus } from '../../utils/types';
import { generateUseerData } from '../../__test__/utils/generate';


const ProfileEditPage = (): JSX.Element => {
	const id= useId();
	const {user, updateUser} = useContext(AuthContext);
	const navigate = useNavigate();
	const [ tutorQuery, setTutorQuery ] = useState<any>({});

	const [ status, setStatus] = useState('loading');
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
		console.debug('ProfileEditPage 1');
		setTutorQuery({
			data: {
				about: faker.lorem.paragraphs(),
				user: generateUseerData({...user})
			} 
		});
		setStatus('success');
		console.debug(1);
	}, []);

	useEffect(() => {
		console.debug('ProfileEditPage 2');

		if(status === 'success'){
			console.debug(2);
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
					value: tutorQuery.data.user.photo, 
				}
			});
		}	

	}, [status]);

	const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();	

		const formData = new FormData(event.currentTarget);

		setStatusMsg({status: 'success'});
		
		updateUser({
			name: formData.get('name'),
			city: formData.get('city'),
			phone: formData.get('phone'),
			photo: formData.get('photo') 
		});
	};

	const background = useMobileMediaQuery()? '' : 'bg -body-bg-right';

	return (
		<>
			<Helmet>
				<body className={background} />
			</Helmet>
			<Text variant='body' containerSize='fixed'>{data.profile_msg}</Text>
			<Form 
				aria-labelledby={id}
				submitButtonLabel={data.save}
				submitHandler={submitHandler} 
				setFormData={setFormState}
				submitedStatus={submitStatus}
			>
				<Text id={id} variant={'title'} size={'small'}>{data.profile}</Text>
				<ImageUploader src={formState?.photo.file? URL.createObjectURL(formState?.photo.file) : formState.photo.value} alt='some user'/>
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
		</>
	);
};

export default ProfileEditPage;