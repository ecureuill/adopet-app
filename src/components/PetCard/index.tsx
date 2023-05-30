import './styles.css';
import data from '../../i18n/pt-br.json';
import { PropsWithChildren, useContext } from 'react';
import IconLink from '../IconLink';
import { ReactComponent as MessageIco } from '../../assets/images/message.svg';
import { AuthContext } from '../../context/auth.context';

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
				<div className='card-shelter'>
					<p className='shelter-location'>{city}({state})</p>
					{ authenticated &&
						<IconLink link={'#'} label={data.talk_to_shelter}>
							<MessageIco />
						</IconLink>
					}
				</div>
			</div>
		</article>
	);
};

export default PetCard;