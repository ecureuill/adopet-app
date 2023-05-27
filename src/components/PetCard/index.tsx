import './styles.css';
import data from '../../i18n/pt-br.json';
import { PropsWithChildren } from 'react';
import IconLink from '../IconLink';

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
	return (
		<article className='card-wrapper'>
			<div className='card-img'>
				{children}
			</div>
			<div className='card-description'>
				<h1 className='pet-name'>{name}</h1>
				<ul className='pet-descr'>
					<li>{age} {data[`ageunit_${ageUnit as keyof object}`]}</li>
					<li>{data[`sizes_${size as keyof object}`]}</li>
					<li>{behavior}</li>
				</ul>
				<div className='card--shelter'>
					<p className='shelter-location'>{city}({state})</p>
					<IconLink link={'#'} label={data.talk_to_shelter}/>
				</div>
			</div>
		</article>
	);
};

export default PetCard;