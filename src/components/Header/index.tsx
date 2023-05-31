import IconLink from '../IconLink';
import './styles.css';
import { ReactComponent as HomeIco } from '../../assets/images/home.svg';
import { ReactComponent as MessageIco } from '../../assets/images/messages.svg';
import { ReactComponent as UserIco } from '../../assets/images/user.svg';
import ProfilePhoto from '../ProfilePhoto';
import { faker } from '@faker-js/faker/locale/pt_BR';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {
	variant?: 'colored' | 'default'
	paws?: boolean,
}

const Header = ( {variant = 'default', paws = false, ...rest}: HeaderProps): JSX.Element => {
	const { authenticated, user } = useContext(AuthContext);

	return (
		<header className={`header -header-${variant} bg -header-bg-left ${paws && '-header-bg-right'}`}>
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
						{
							user!.photo?
								<ProfilePhoto alt='usuario' src={user!.photo as string}/>
								:
								<UserIco/>
						}
					</IconLink>
				</div>
			}
		</header>
	);
};

export default Header;