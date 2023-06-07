import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { ReactComponent as LogoWhite } from '../../assets/images/logo-clear.svg';
import { LinkButton, Text } from '../../components';
import { AuthContext } from '../../context/auth.context';
import data from '../../i18n/pt-br.json';
import './styles.css';

const HomePage = (): JSX.Element => {

	const {authenticated} = useContext(AuthContext);

	return (
		<>
			<Helmet>
				<body className='homepg bg -body-bg-right -body-bg-pets' />
			</Helmet>
			<LogoWhite title='adopet' height={'46px'} width={'186px'}/>
			<Text variant='title'>{data.welcome}</Text>
			<Text variant='body'>{data.welcome_msg}</Text>
			<div className='-flex-column -gap-medium'>

				{authenticated?
					<LinkButton to={'/pets'}>{data.lookup_pets}</LinkButton>
					:
					<>
						<LinkButton to={'/login'}>{data.account_have}</LinkButton>
						<LinkButton to={'/signup'}>{data.account_want}</LinkButton>
					</>
				}
			</div>
		</>
	);
};

export default HomePage;