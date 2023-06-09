import { faker } from '@faker-js/faker/locale/pt_BR';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { PetCard, Text } from '../../components';
import data from '../../i18n/pt-br.json';
import { generatePetsData } from '../../__test__/utils/generate';
import './styles.css';

const PetsPage = (): JSX.Element => {
	const [pets, setPets] = useState<any[]>([]);
	const [status, setStatus] = useState<string>('loading');

	useEffect(() => {
		setPets(generatePetsData(23));
		setStatus('success');
	}, []);

	return (
		<>
			<Helmet>
				<body className='petspg' />
			</Helmet>
			<Text variant='body' className='body-text'>{data.hello}!</Text>
			<Text variant='body'>{data.pets_msg}</Text>
			{status === 'loading' && <Text variant='body' size='small'>{status}...</Text>}
			{	
				status === 'success' &&
					<>
						{pets.length === 0 &&  <Text variant='body' size='small'>Não encontrado</Text>}
						<ul className='pets-wrapper' aria-label='pets'>
							{
								pets.map((pet) => 
									<li>
										<PetCard  
											age={pet.age} 
											ageUnit={pet.age_unit} 
											behavior={faker.lorem.words(2)}
											city={pet.shelter.user.city}
											name={pet.name} 
											size={pet.size_variety} 
											state={pet.shelter.user.state}>
											<img src={faker.image.urlLoremFlickr({category: 'animal'})} alt="tuti"/>
										</PetCard>
									</li>
								)
							}
						</ul>
					</> 
			}
		</>
	);
};

export default PetsPage;