import { faker } from '@faker-js/faker/locale/pt_BR';
import { PetCard, Text } from '../../components';
import data from '../../i18n/pt-br.json';
import './styles.css';

const PetsPage = (): JSX.Element => {
	return (
		<main className='petspg'>
			<Text variant='body'>{data.pets_msg}</Text>
			<div className='pets-wrapper'>
				{
					[1,2,3,4,5,6,7,8,9].map(pet => 
						<PetCard  
							age={faker.datatype.number({min: 1, max: 14}).toString()} 
							ageUnit={['y','m','d'][faker.datatype.number({min: 0, max: 2})]} 
							behavior={faker.lorem.words(2)}
							city={faker.location.cityName()} 
							name={faker.person.firstName()} 
							size={['xs','s','m','l', 'xl'][faker.datatype.number({min: 0, max: 4})]} 
							state={faker.location.state({abbreviated: true})}>
							<img src={faker.image.urlLoremFlickr({category: 'animal'})} alt="tuti"/>
						</PetCard>
					)
				}
			</div>
		</main>
	);
};

export default PetsPage;