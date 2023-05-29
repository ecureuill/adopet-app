import './styles.css';
import data from '../../i18n/pt-br.json';
import Text from '../Text';

const Footer = ( {className: styles, ...rest}: React.ComponentPropsWithoutRef<'footer'>): JSX.Element => {
	return (
		<footer className={`footer ${styles}`}>
			<Text variant='footer'>2022 - {data.copyright_by} Alura</Text>
		</footer>
	);
};

export default Footer;