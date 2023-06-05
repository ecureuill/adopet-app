import { faker } from '@faker-js/faker/locale/pt_BR';
import { render, screen } from '@testing-library/react';
import PetCard from '.';
import data from '../../i18n/pt-br.json';
import { AllTheProviders, AllTheProvidersAutheticated } from '../../__test__/utils/wrapper';

describe('PetCard component', () => {
	let name: string;
	let city: string;
	let state: string;
	let behavior: string;
	let age: string;
	
	beforeEach(() => {
		name = faker.animal.dog();
		city = faker.location.city();
		state = faker.location.state({abbreviated: true});
		behavior = faker.lorem.sentence(3);
		age = faker.number.int().toString();
	});

	it('should have one image element', () => {
		render(<PetCard 
			name={name} 
			age={age} 
			ageUnit={'y'} 
			size={'s'} 
			behavior={behavior} 
			city={city} 
			state={state}
		>
			<img src={faker.image.urlLoremFlickr({category: 'animal'})} alt='nome do animal' />
		</PetCard>, { wrapper: AllTheProviders} );

		const img = screen.getAllByAltText('nome do animal');
		expect(img).toHaveLength(1);

		expect(img[0]).toBeInTheDocument();
	});

	it('should have one h2 element', () => {
		render(<PetCard 
			name={name} 
			age={age} 
			ageUnit={'y'} 
			size={'s'} 
			behavior={behavior} 
			city={city} 
			state={state}
		/>, { wrapper: AllTheProviders} );

		const heading = screen.getAllByRole('heading');
		expect(heading).toHaveLength(1);

		expect(screen.getByText(name, { selector: 'h2'})).toBeInTheDocument();
	});

	it('should have one list', () => {
		render(<PetCard 
			name={name} 
			age={age} 
			ageUnit={'y'} 
			size={'s'} 
			behavior={behavior} 
			city={city} 
			state={state}
		/>, { wrapper: AllTheProviders} );

		const list = screen.getAllByRole('list');
		expect(list).toHaveLength(1);
	});

	it('should render list of pet details', () => {
		render(<PetCard 
			name={name} 
			age={age} 
			ageUnit={'y'} 
			size={'s'} 
			behavior={behavior} 
			city={city} 
			state={state}
		/>, { wrapper: AllTheProviders} );

		const listItem = screen.getAllByRole('listitem');
		expect(listItem).toHaveLength(3);

		expect(listItem[0].textContent).toEqual(`${age} ano(s)`);
		expect(listItem[1].textContent).toEqual(`${data.size} ${data.sizes_s}`);
		expect(listItem[2].textContent).toEqual(behavior);
	});

	it('should render [xsmall size]', () => {
		render(<PetCard 
			name={name} 
			age={age} 
			ageUnit={'y'} 
			size={'xs'} 
			behavior={behavior} 
			city={city} 
			state={state}
		/>, { wrapper: AllTheProviders} );

		const listItem = screen.getAllByRole('listitem');
		expect(listItem).toHaveLength(3);

		expect(listItem[0].textContent).toEqual(`${age} ano(s)`);
		expect(listItem[1].textContent).toEqual(`${data.size} ${data.sizes_xs}`);
		expect(listItem[2].textContent).toEqual(behavior);
	});

	it('should render [small size]', () => {
		render(<PetCard 
			name={name} 
			age={age} 
			ageUnit={'y'} 
			size={'s'} 
			behavior={behavior} 
			city={city} 
			state={state}
		/>, { wrapper: AllTheProviders} );

		const listItem = screen.getAllByRole('listitem');
		expect(listItem).toHaveLength(3);

		expect(listItem[0].textContent).toEqual(`${age} ano(s)`);
		expect(listItem[1].textContent).toEqual(`${data.size} ${data.sizes_s}`);
		expect(listItem[2].textContent).toEqual(behavior);
	});

	it('should render [medium size]', () => {
		render(<PetCard 
			name={name} 
			age={age} 
			ageUnit={'y'} 
			size={'m'} 
			behavior={behavior} 
			city={city} 
			state={state}
		/>, { wrapper: AllTheProviders} );

		const listItem = screen.getAllByRole('listitem');
		expect(listItem).toHaveLength(3);

		expect(listItem[0].textContent).toEqual(`${age} ano(s)`);
		expect(listItem[1].textContent).toEqual(`${data.size} ${data.sizes_m}`);
		expect(listItem[2].textContent).toEqual(behavior);
	});

	it('should render [large size]', () => {
		render(<PetCard 
			name={name} 
			age={age} 
			ageUnit={'y'} 
			size={'l'} 
			behavior={behavior} 
			city={city} 
			state={state}
		/>, { wrapper: AllTheProviders} );

		const listItem = screen.getAllByRole('listitem');
		expect(listItem).toHaveLength(3);

		expect(listItem[0].textContent).toEqual(`${age} ano(s)`);
		expect(listItem[1].textContent).toEqual(`${data.size} ${data.sizes_l}`);
		expect(listItem[2].textContent).toEqual(behavior);
	});

	it('should render [xlarge size]', () => {
		render(<PetCard 
			name={name} 
			age={age} 
			ageUnit={'y'} 
			size={'xl'} 
			behavior={behavior} 
			city={city} 
			state={state}
		/>, { wrapper: AllTheProviders} );

		const listItem = screen.getAllByRole('listitem');
		expect(listItem).toHaveLength(3);

		expect(listItem[0].textContent).toEqual(`${age} ano(s)`);
		expect(listItem[1].textContent).toEqual(`${data.size} ${data.sizes_xl}`);
		expect(listItem[2].textContent).toEqual(behavior);
	});

	it('should render [city (state)] in p element', () => {
		render(<PetCard 
			name={name} 
			age={age} 
			ageUnit={'y'} 
			size={'s'} 
			behavior={behavior} 
			city={city} 
			state={state}
		/>, { wrapper: AllTheProviders} );

		expect(screen.getByText(`${city} (${state})`, { selector: 'p'})).toBeInTheDocument();
	});

	it('should not render [Falar com responsável] element when user is not authenticated', () => {
		render(<PetCard 
			name={name} 
			age={age} 
			ageUnit={'y'} 
			size={'s'} 
			behavior={behavior} 
			city={city} 
			state={state}
		/>, { wrapper: AllTheProviders} );

		expect(screen.queryByText('Falar com responsável', { selector: 'a'})).not.toBeInTheDocument();
	});

	it('should render [Falar com responsável] element when user is authenticated', () => {
		render(<PetCard 
			name={name} 
			age={age} 
			ageUnit={'y'} 
			size={'s'} 
			behavior={behavior} 
			city={city} 
			state={state}
		/>, { wrapper: AllTheProvidersAutheticated} );

		expect(screen.getByText(data.talk_to_shelter, { selector: 'a'})).toBeInTheDocument();
	});

});