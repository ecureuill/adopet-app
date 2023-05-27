import {ReactComponent as LogoBlue} from '../../assets/images/logo-blue.svg';
import {ReactComponent as LogoWhite} from '../../assets/images/logo-clear.svg';

type LogoProps = {
	variant: 'blue' | 'white';
}

const Logo = ( {variant = 'blue'}): JSX.Element => {

	if(variant === 'white')
		return <LogoWhite title='adopet' height={'46px'} width={'186px'}/>;
	
	return <LogoBlue title='adopet' height={'46px'} width={'186px'}/>;
};

export default Logo;
