import './styles.css';
import {ReactComponent as LogoWhite} from '../../assets/images/logo-clear.svg';
import { Button } from '../../components';
import data from '../../i18n/pt-br.json';


const HomePage = (): JSX.Element => {
	return (
		<main className='loginpg -flex-column -gap-big bg -body-bg-right -body-bg-pets'>
			<LogoWhite title='adopet' height={'46px'} width={'186px'}/>
			<h1>{data.welcome}</h1>
			<p>{data.welcome_msg}</p>
			<div className='-flex-column -gap-medium'>
				<Button>{data.account_have}</Button>
				<Button>{data.account_want}</Button>
			</div>
		</main>
	);
};

export default HomePage;