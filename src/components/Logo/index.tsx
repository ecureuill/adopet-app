import { ReactComponent as LogoBlue } from '../../assets/images/logo-blue.svg';
import { ReactComponent as LogoWhite } from '../../assets/images/logo-clear.svg';

import './styles.css';

type LogoProps = {
	variant?: 'blue' | 'white';
}

const Logo = ( {variant = 'blue'} : LogoProps): JSX.Element => {

	if(variant === 'white')
		return <LogoWhite title='adopet' className='logo-adopet'/>;
	
	return <LogoBlue title='adopet' className='logo-adopet'/>;
};

export default Logo;
