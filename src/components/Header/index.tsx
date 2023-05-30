import IconLink from '../IconLink';
import './styles.css';
import { ReactComponent as HomeIco } from '../../assets/images/home.svg';
import { ReactComponent as MessageIco } from '../../assets/images/messages.svg';
import { ReactComponent as UserIco } from '../../assets/images/user.svg';
import ProfilePhoto from '../ProfilePhoto';
import { faker } from '@faker-js/faker/locale/pt_BR';

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {
	variant?: 'colored' | 'default'
	paws?: boolean,
}

const Header = ( {variant = 'default', paws = false, ...rest}: HeaderProps): JSX.Element => {
	const hasPhoto = false;

	return (
		<header className={`header -header-${variant} bg -header-bg-left ${paws && '-header-bg-right'}`}>
			<div className='header-menu-wrapper'>
				<IconLink label='message' link='#home' key='home' onlyIcon={true}>
					<MessageIco/>
				</IconLink>
				<IconLink label='home' link='#message' key='message' onlyIcon={true}>
					<HomeIco />
				</IconLink>
			</div>
			<div className='user-menu'>
				{
					hasPhoto?
						<ProfilePhoto alt='usuario' src={faker.image.avatar()}/>
						:
						<UserIco/>
				}
			</div>
		</header>
	);
};

export default Header;