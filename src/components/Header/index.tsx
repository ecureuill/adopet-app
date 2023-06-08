import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as HomeIco } from '../../assets/images/home.svg';
import LogoClear from '../../assets/images/logo-clear.svg';
import { ReactComponent as MessageIco } from '../../assets/images/messages.svg';
import { AuthContext } from '../../context/auth.context';
import { TabletOrAbove, useDesktopBigMediaQuery } from '../../utils/media-queries';
import IconLink from '../IconLink';
import Logo from '../Logo';
import ProfilePhoto from '../ProfilePhoto';
import './styles.css';


const Header = ({className: styles, ...rest}: React.ComponentPropsWithoutRef<'header'>): JSX.Element => {
	const { authenticated, user } = useContext(AuthContext);
	const location = useLocation();

	const paws = (location.pathname === '/signup' || location.pathname === '/login');

	if(styles === undefined) styles = '';

	return (
		<header className={`header bg -header-bg-left ${paws? '-header-bg-right' : ''} ${styles}`} {...rest} >
			<div className='header-menu-wrapper'>
				<TabletOrAbove>
					<img src={LogoClear} alt='adopet' className='logo'/> 
				</TabletOrAbove>
				<IconLink label='home' link='/' key='home' onlyIcon={true}>
					<HomeIco />
				</IconLink>
				{ authenticated &&
					<IconLink label='message' link='/message' key='message' onlyIcon={true}>
						<MessageIco/>
					</IconLink>
				}
			</div>
			{
				useDesktopBigMediaQuery() && (paws || location.pathname === '/') && 
				<div className='header-logo-wrapper'>
					<Logo variant={paws? 'blue': 'white'}/>
				</div>
			}
			{ authenticated &&
				<div className='user-menu'>
					<IconLink label='my profile' link='/myprofile' key='profile' onlyIcon={true}>
						<ProfilePhoto alt='usuario' src={user?.photo? user.photo : ''}/>
					</IconLink>
				</div>
			}
		</header>
	);
};

export default Header;