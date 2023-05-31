import { Outlet } from 'react-router-dom';
import { Footer } from '../components';

export default function Root() {
	return (
		<>
			<Outlet />
			<Footer />
		</>
	);
}