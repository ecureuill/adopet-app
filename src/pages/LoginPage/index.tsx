import './styles.css';
import {ReactComponent as LogoWhite} from '../../assets/images/logo-clear.svg';
import {ReactComponent as Pets} from '../../assets/images/pets.svg';
import {ReactComponent as BodyBG} from '../../assets/images/body-bg.svg';
import { Button } from '../../components';
import data from '../../i18n/pt-br.json';


const LoginPage = (): JSX.Element => {
	return (
		<main className='loginpg -flex-column -gap-big'>
			<LogoWhite title='adopet' height={'46px'} width={'186px'}/>
			<h1>{data.welcome}</h1>
			<p>{data.welcome_msg}</p>
			<div className='-flex-column -gap-medium'>
				<Button>{data.account_have}</Button>
				<Button>{data.account_want}</Button>
			</div>
			<Pets />
			<BodyBG className='bg-right'  height={'415px'} width={'84px'}/>
		</main>
	);
};

export default LoginPage;