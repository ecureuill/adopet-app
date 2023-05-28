import './styles.css';
import data from '../../i18n/pt-br.json';

const Footer = ( {className: styles, ...rest}: React.ComponentPropsWithoutRef<'footer'>): JSX.Element => {
	return (
		<footer className={`footer ${styles}`}>
			2022 - {data.copyright_by} Alura
		</footer>
	);
};

export default Footer;