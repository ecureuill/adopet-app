import './styles.css';
import {ReactComponent as LogoWhite} from '../../assets/images/logo-clear.svg';
import { Button, Header, Text } from '../../components';
import data from '../../i18n/pt-br.json';


const HomePage = (): JSX.Element => {
	return (
		<>
			<Header variant='colored'/>
			<main className='homepg -flex-column -gap-big bg -body-bg-right -body-bg-pets'>
				<LogoWhite title='adopet' height={'46px'} width={'186px'}/>
				<Text variant='title'>{data.welcome}</Text>
				<Text variant='body'>{data.welcome_msg}</Text>
				<div className='-flex-column -gap-medium'>
					<Button size='medium'>{data.account_have}</Button>
					<Button size='medium'>{data.account_want}</Button>
				</div>
			</main>
		</>
	);
};

export default HomePage;