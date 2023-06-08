import { ReactComponent as LogoBlue } from '../../assets/images/logo-blue.svg';
import { ReactComponent as LogoWhite } from '../../assets/images/logo-clear.svg';

import './styles.css';

type LogoProps = {
	variant?: 'blue' | 'white';
}

const Logo = ( {variant = 'blue'} : LogoProps): JSX.Element => {

	return <div className='logo-adopet'>
		{ variant === 'white' ?
			<LogoWhite title='adopet'/>
			:
			<LogoBlue title='adopet'/>
		}
	</div>;
	
};

export default Logo;
