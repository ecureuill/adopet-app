import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as HomeIco } from '../../assets/images/home.svg';
import { ReactComponent as MessageIco } from '../../assets/images/messages.svg';
import { ReactComponent as UserIco } from '../../assets/images/user.svg';
import { AuthContext } from '../../context/auth.context';
import { bufferToURL } from '../../utils';
import IconLink from '../IconLink';
import ProfilePhoto from '../ProfilePhoto';
import './styles.css';


const Header = ({className, ...rest}: React.ComponentPropsWithoutRef<'header'>): JSX.Element => {
	const { authenticated, user } = useContext(AuthContext);
	const location = useLocation();

	const paws = (location.pathname === '/signup' || location.pathname === '/login');
	const variant = location.pathname === '/' ? 'colored' : 'default';

	return (
		<header className={`header -header-${variant} bg -header-bg-left ${paws && '-header-bg-right'} ${className}`} {...rest} >
			<div className='header-menu-wrapper'>
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