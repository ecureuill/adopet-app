import { Helmet } from 'react-helmet';
import { Text } from '../../components';
import data from '../../i18n/pt-br.json';

const ErrorPage = (error: any): JSX.Element => {
	return (
		<main>
			<Text variant='title'>{data.error_sniff}</Text>
			<Text variant={'body'}>{data.error_message}</Text>
			<code>
				{error.message}
			</code>
			<div className='-bg-lost'/>
		</main>
	);
};

export default ErrorPage;