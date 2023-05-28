import './styles.css';
interface ProfilePhotoProps extends React.ComponentPropsWithoutRef<'img'>{
	alt: string,
	src: string,
}

const ProfilePhoto = ( props: ProfilePhotoProps): JSX.Element => {
	const { className: styles, ...rest } = props;

	return (
		<img {...rest} className={`profile-img ${styles}`} />
	);
};

export default ProfilePhoto;