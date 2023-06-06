import { UUID } from 'crypto';
import { QueryClient, useQuery } from 'react-query';
import { getAll } from '../api/pet.api';
import { getOneBy } from '../api/tutor.api';

export const queryClient = new QueryClient({
	defaultOptions:{
		queries: {
			refetchOnWindowFocus: false
		}
	}
});

export const usePetsQuery = () => {
	const {data, error, status} = useQuery<any, Error>('pets', () => getAll());
	return  {data, error, status};
};

export const useTutorQuery = (id: UUID) => {
	const { data, error, status} = useQuery<any, Error>('tutor', () => getOneBy(id));
	console.debug(data);

	return  {data, error, status};
};