import { PropsWithChildren, useId } from 'react';
import { ReactComponent as EyeIco } from '../../assets/images/eye.svg';
import data from '../../i18n/pt-br.json';
import { phoneRegex } from '../../utils';
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

	const wrapperProps = {
		id1: id1, 
		id2: id2, 
		align: align, 
		labelColor: labelColor, 
		label: label, 
		errormessage: errormessage,
	};

	if(type === 'password')
		return (
			<Wrapper {...wrapperProps}>
				<div className={'input-wrapper-password'}>
					<input 
						autoComplete='on'
						{...rest} 
						id={id1}  
						{...properties}
					/>
					<div className='reveal-ico-wrapper'>
						<EyeIco className='reveal-ico' role='button' aria-label={data.password_reveal}/>
					</div> 
				</div> 
			</Wrapper>
		);


	if(type === 'tel')
		return (
			<Wrapper {...wrapperProps}>
				<input 
					autoComplete='on'
					minLength={8}
					maxLength={14}
					pattern={phoneRegex}
					{...rest} 
					id={id1}  
					{...properties}
				/>
			</Wrapper>
		);
	
	return (
		<Wrapper {...wrapperProps}>
			<input 
				{...rest} 
				id={id1}
				{...properties}
			/>
		</Wrapper>
	);
};

type WrapperProps = {
	id1: string
	id2: string
	align?: 'default' | 'center'
	labelColor?: 'default' | 'dark',
	label: string
	errormessage?: string
}
const Wrapper = ({id1,id2, align, labelColor, label, errormessage, children}: WrapperProps & PropsWithChildren) => {
	return	(
		<div className={'input-wrapper -flex-column -gap-small'}>
			<label htmlFor={id1} className={`label -label-align-${align} -label-color-${labelColor}`}>{label}</label>
			{children}			
			<div aria-live='polite'>
				<label id={id2} className='errormessage' aria-label='email'>{errormessage}</label>
			</div>
	
		</div>
	);
};

export default TextInput;