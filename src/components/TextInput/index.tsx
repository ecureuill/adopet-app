import { useEffect, useId } from 'react';
import  { ReactComponent as EyeIco } from '../../assets/images/eye.svg';
import './styles.css';

export interface TextInputProps extends React.ComponentPropsWithoutRef<'input'> {
	label: string,
	errormessage?: string,
	variant?: 'default' | 'white',
	align?: 'default' | 'center'
	labelColor?: 'default' | 'dark',

} 
const TextInput = ( {type, errormessage, label, className: styles = '', variant = 'default', align = 'default', labelColor = 'default',...rest}: TextInputProps): JSX.Element => {
	const id1 = useId();
	const id2 = useId();
	const properties: Partial<TextInputProps>={
		className: `input -input-${variant} -input-${align} ${styles}`,
		'aria-errormessage':id2,
		type:type

	};

	return (
		<div className={'input-wrapper -flex-column -gap-small'}>
			<label htmlFor={id1} className={`label -label-align-${align} -label-color-${labelColor}`}>{label}</label>
			{
				type === 'password'?
					<div className={'input-wrapper-password'}>
						<input 
							autoComplete='on'
							{...rest} 
							id={id1}  
							{...properties}
						/>
						<div className='reveal-ico-wrapper'>
							<EyeIco className='reveal-ico'/>
						</div> 
					</div> 
					:
					<input 
						{...rest} 
						id={id1}
						{...properties}
					/>
			}			
			<div aria-live='polite'>
				<label id={id2} className='errormessage' aria-label='email'>{errormessage}</label>
			</div>

		</div>
	);
};

export default TextInput;