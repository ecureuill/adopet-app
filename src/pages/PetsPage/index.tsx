import { faker } from '@faker-js/faker/locale/pt_BR';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { PetCard, Text } from '../../components';
import data from '../../i18n/pt-br.json';
import { usePetsQuery } from '../../services/query-client';
import './styles.css';

const PetsPage = (): JSX.Element => {
	const { data: petQuery, status} = usePetsQuery();
	const [pets, setPets] = useState<any[]>([]);

	useEffect(() => {
		if(status === 'success'){
			if(petQuery.data.entities !== undefined){
				setPets(petQuery.data.entities);
				console.debug(petQuery.data.entities);
			}
		}
	}, [petQuery, status]);

	return (
		<>
			<Helmet>
				<body className='petspg' />
			</Helmet>
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