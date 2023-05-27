import { ReactComponent as MessageIco } from '../../assets/images/message.svg';
import './styles.css';

type IconLinkProps = {
	link: string;
	label: string
};

const IconLink = ( {link, label}: IconLinkProps): JSX.Element => {
	return (
		<div className='ilink-wrapper'>
			<MessageIco /><a href={link}>{label}</a>
		</div>
	);
};

export default IconLink;