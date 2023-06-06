import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { adopetAPI } from '../services/api';
import { login } from '../services/api/user.api';
import { User } from '../utils/types';

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
		const data = localStorage.getItem('@PontoAuth:user');
        
		if(data){
			const authdata: AuthData = JSON.parse(data);
			setUser(authdata.user);
			adopetAPI.defaults.headers['Authorization'] = `Bearer ${authdata.token}`;
			setLoading(false);
		}
		else
		{
			setLoading(false);
		}
	}, [user]);

	const signIn = async (email: string, password: string) => {
		setError('');
		console.debug('signIn');
		
		const response = await login(email, password);
		
		if(response.status === 200)
		{
			adopetAPI.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;
			localStorage.setItem('@adopetAuth:data', response.data);
			setUser(response.data.user);
			return true;
		}
		else
		{
			setError((response as any).error.message);
			return false;
		}
	};

	const signOut = () => {
		adopetAPI.defaults.headers['Authorization'] = null;
		localStorage.removeItem('@adopetAuth');
		setUser(null);
	};

	const updateUser = (arg: {[key: string]: any}) => {
		setUser((prev) => {
			return {...prev!, ...arg};
		});
	};
	
	return (
		<AuthContext.Provider value={{
			authenticated: !!user, updateUser, loading, user, signIn, signOut, error
		}}>
			{children}
		</AuthContext.Provider>
	);
};