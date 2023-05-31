import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const { authenticated } = useContext(AuthContext);
	const location = useLocation();

	if (!authenticated) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};
