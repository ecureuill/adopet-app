import './styles.css';
import data from '../../i18n/pt-br.json';
import { PropsWithChildren, useContext } from 'react';
import IconLink from '../IconLink';
import { ReactComponent as MessageIco } from '../../assets/images/message.svg';
import { AuthContext } from '../../context/auth.context';
import { Text } from '../.';

type PetCardProps = {
	name: string,
	age: string,
	ageUnit: string,
	size: string,
	behavior: string,
	city: string,
	state: string
};

const PetCard = ( {name, age, ageUnit, size, behavior, city, state, children}: PetCardProps & PropsWithChildren): JSX.Element => {

	const { authenticated } = useContext(AuthContext);

	if(city.length > 13)
		city = city.substring(0, 12) + '...';

	return (
		<article className='card-wrapper'>
			<div className='card-img'>
				{children}
			</div>
			<div className='card-description'>
				<Text variant='subtitle' size='default' className='pet-name'>{name}</Text>
				<ul className='pet-descr'>
					<li>{age} {data[`ageunit_${ageUnit as keyof object}`]}</li>
					<li>{data.size} {data[`sizes_${size as keyof object}`]}</li>
					<li>{behavior}</li>
				</ul>
				<div className='card-shelter'>
					<p className='shelter-location'>{city} ({state})</p>
					{ authenticated &&
						<IconLink link={'contact'} label={data.talk_to_shelter}>
							<MessageIco />
						</IconLink>
					}
				</div>
			</div>
		</article>
	);
};

export default PetCard;