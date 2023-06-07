import { Helmet } from 'react-helmet';
import { Text } from '../../components';
import data from '../../i18n/pt-br.json';

const ErrorPage = (): JSX.Element => {
	return (
		<main>
			<Helmet>
				<body className='bg -lost' />
			</Helmet>
			<Text variant='title'>{data.error_sniff}</Text>
			<Text variant={'body'}>{data.error_message}</Text>
		</main>
	);
};

export default ErrorPage;