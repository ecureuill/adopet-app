import { ProfilePhoto } from '../../components';
import data from '../../i18n/pt-br.json';
import './styles.css';

type ImageUploaderProps = {
	src: string,
	alt: string,
	width: number,
	height: number,
}

const ImageUploader = ({src, alt, width, height}: ImageUploaderProps): JSX.Element => {
	return (
		<div className='imgUploader-wrapper'>
			<p className='imgUploader-label'>{data.photo}</p>
			<ProfilePhoto src={src} alt={alt} width={width} height={height}  className='imgUploader-photo'/>
			<p className='color-tertiary imgUploader-hint'>{data.profile_photo_edit}</p>
		</div>
	);
};

export default ImageUploader;