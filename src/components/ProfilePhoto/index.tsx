import './styles.css';
import { ReactComponent as UserIco } from '../../assets/images/user.svg';

interface ProfilePhotoProps extends React.ComponentPropsWithoutRef<'img'>{
	alt: string,
	src: string,
}

const ProfilePhoto = ( props: ProfilePhotoProps): JSX.Element => {
	const { className: styles, src, ...rest } = props;

	if(src === '' || src === undefined)
		return <UserIco className={`profile-img ${styles}`} />;

	return (
		<img src={src} {...rest} className={`profile-img ${styles}`} />
	);
};

export default ProfilePhoto;