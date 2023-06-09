import { randomUUID } from 'crypto';
import { faker } from '@faker-js/faker/locale/pt_BR';

export const generatePetData = (overide = {}, includeSensitive = true) => { 
	return {
		id: randomUUID(),
		shelterId: randomUUID(),
		photo: faker.image.urlLoremFlickr({ category: 'animals' }),
		adopted: faker.datatype.boolean(),
		age: faker.number.int(),
		age_unit: ['y','m','d'][faker.number.int({min: 0, max: 2})],
		size_variety: ['xs','s','m','l', 'xl'][faker.number.int({min: 0, max: 4})],
		type: ['dog','cat'][faker.number.int({min: 0, max: 1})],
		name: faker.person.firstName(),
		shelter: generateShelterData(),
		...overide,
	};
};

export const generatePetsData = (n = 1, overide = {}) => {
	return Array.from({length: n},(_, i) => {
		return generatePetData(overide);
	});
};


export const generateTutorData = (overide = {}) => {
	return {
		user: generateUseerData(overide)
	};
};


export const generateShelterData = (overide = {}) => {
	return {
		user: generateUseerData(overide)
	};
};
export const generateUseerData = (overide = {}) => {
	return {
		name: faker.person.fullName(),
		phone: faker.phone.number('## #.####-####'),
		city: faker.location.city(),
		photo: null,
		...overide,
	};
};