import './styles.css';

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {
	variant?: 'colored' | 'default'
	paws?: boolean
}

const Header = ( {variant = 'default', paws = false, ...rest}: HeaderProps): JSX.Element => {

	return (
		<header className={`header -header-${variant} bg -header-bg-left ${paws && '-header-bg-right'}`}>
			Teste
		</header>
	);
};

export default Header;