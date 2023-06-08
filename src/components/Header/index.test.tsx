import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import { Context as ResponsiveContext } from 'react-responsive';
import Header from '.';
import { AllTheProviders } from '../../__test__/utils/wrapper';

describe('Responsive Header', () => {
	
	it('Should not render adopet logo in Mobile mode', () => {
		render(
			<ResponsiveContext.Provider value={{ width: faker.number.int({max: 768}) }}>
				<Header />, 
			</ResponsiveContext.Provider>,
			{
				wrapper: AllTheProviders
			});

		expect(screen.queryByAltText('adopet')).not.toBeInTheDocument();
	});
	
	it('Should render adopet logo when not in Mobile mode', () => {
		render(
			<ResponsiveContext.Provider value={{ width: faker.number.int({min: 768}) }}>
				<Header />, 
			</ResponsiveContext.Provider>,
			{
				wrapper: AllTheProviders
			});

		expect(screen.getByAltText('adopet')).toBeInTheDocument();
	});
});