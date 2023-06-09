import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adopetAPI } from '../services/api';
import { login } from '../services/api/user.api';
import { User } from '../utils/types';
import { generateUseerData } from '../__test__/utils/generate';

interface IAuthContext {
	authenticated: boolean
	loading: boolean,
	user: User | null,
	signIn: (email: string, password: string) => Promise<boolean>,
	signOut: () => void,
	updateUser: (arg: {[key: string]: any}) => void,
	error: any
}

type AuthData = {
	user: User;
	token: string;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({children}: PropsWithChildren): JSX.Element => {
	const [user, setUser] = useState<User|null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() =>{
		const data = localStorage.getItem('@adopetAuth:user');
		
		if(data !== null){
			setUser(JSON.parse(data) as unknown as User);
			setLoading(false);

			const timer = setTimeout(() => {
				signOut();
			}, 60000);
		}
		else
		{
			setLoading(false);
		}
	}, []);

	const signIn = async (email: string, password: string) => {
		setError('');
		console.debug('signIn');
		if(email === 'tutor@mail.com' && password === '123aSd7')
		{
			const user = generateUseerData();
			localStorage.setItem('@adopetAuth:user', JSON.stringify(user) );
			setUser({...user, role: 'tutor'});
			const timer = setTimeout(() => {
				signOut();
			}, 60000);
			return true;
		}
		else
		{
			setError('Wrong credentials');
			return false;
		}
	};

	const signOut = () => {
		adopetAPI.defaults.headers['Authorization'] = null;
		localStorage.removeItem('@adopetAuth:user');
		setUser(null);
	};

	const updateUser = (arg: {[key: string]: any}) => {
		setUser({...user!, ...arg});
	};
	
	return (
		<AuthContext.Provider value={{
			authenticated: !!user, updateUser, loading, user, signIn, signOut, error
		}}>
			{children}
		</AuthContext.Provider>
	);
};