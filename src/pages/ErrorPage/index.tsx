import { Header, Text } from '../../components';
import data from '../../i18n/pt-br.json';

const ErrorPage = (): JSX.Element => {
	return (
		<>
			<Header />
			<main className='bg -lost'>
				<Text variant='title'>{data.error_sniff}</Text>
				<Text variant={'body'}>{data.error_message}</Text>
			</main>
		</>
	);
};

export default ErrorPage;