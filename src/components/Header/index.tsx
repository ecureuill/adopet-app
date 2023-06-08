import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as HomeIco } from '../../assets/images/home.svg';
import { ReactComponent as MessageIco } from '../../assets/images/messages.svg';
import Logo from '../../assets/images/logo-clear.svg';
import { AuthContext } from '../../context/auth.context';
import { bufferToURL } from '../../utils';
import { TabletOrAbove, useDesktopMediaQuery, useTabletAndAboveMediaQuery, useTabletMediaQuery } from '../../utils/media-queries';
import IconLink from '../IconLink';
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
					<img src={Logo} alt='adopet' className='logo'/> 
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
			{ authenticated &&
				<div className='user-menu'>
					<IconLink label='my profile' link='/myprofile' key='profile' onlyIcon={true}>
						<ProfilePhoto alt='usuario' src={user?.photo? bufferToURL(user.photo.data) : ''}/>
					</IconLink>
				</div>
			}
		</header>
	);
};

export default Header;