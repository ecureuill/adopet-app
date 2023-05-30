import { useId } from 'react';
import  { ReactComponent as EyeIco } from '../../assets/images/eye.svg';
import './styles.css';

export interface TextInputProps extends React.ComponentPropsWithoutRef<'input'> {
	label: string,
	variant?: 'default' | 'white',
	align?: 'default' | 'center'
	labelColor?: 'default' | 'dark',
} 
const TextInput = ( {type, label, className: styles = '', variant = 'default', align = 'default', labelColor = 'default',...rest}: TextInputProps): JSX.Element => {
	const id = useId();

	return (
		<div className={'input-wrapper -flex-column -gap-small'}>
			<label htmlFor={id} className={`label -label-align-${align} -label-color-${labelColor}`}>{label}</label>
			{
				type === 'password'?
					<div className={'input-wrapper-password'}>
						<input id={id} {...rest} className={`input -input-${variant} -input-${align} ${styles}`} 
							autoComplete='on'

						/>
						<div className='reveal-ico-wrapper'>
							<EyeIco className='reveal-ico'/>
						</div> 
					</div> 
					:
					<input id={id} {...rest} className={`input -input-${variant} -input-${align} ${styles}`} />
			}
		</div>
	);
};

export default TextInput;