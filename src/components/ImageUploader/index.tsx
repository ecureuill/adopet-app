import { useId } from 'react';
import { ProfilePhoto } from '../../components';
import data from '../../i18n/pt-br.json';
import './styles.css';

type ImageUploaderProps = {
	src: string,
	alt: string,
}

const ImageUploader = ({src, alt}: ImageUploaderProps): JSX.Element => {
	const id = useId();

	return (
		<div className='imgUploader-wrapper'>
			<label htmlFor={id}>
				<p className='imgUploader-label'>{data.photo}</p>
				<ProfilePhoto src={src} alt={alt} className='imgUploader-photo'/>
			</label>
			<input type='file'
				name="photo"
				id={id}
				accept='image/*'
			/>
			<p className='color-tertiary imgUploader-hint'>{data.profile_photo_edit}</p>
		</div>
	);
};

export default ImageUploader;