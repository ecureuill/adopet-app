import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { adopetAPI } from '../services/api';
import { login } from '../services/api/user.api';
import { User } from '../utils/types';

interface IAuthContext {
	authenticated: boolean
	loading: boolean,
	user: User | null,
	signIn: (email: string, password: string) => Promise<void>,
	signOut: () => void,
}

type AuthData = {
	user: User;
	token: string;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({children}: PropsWithChildren): JSX.Element => {
	const [user, setUser] = useState<User|null>(null);
	const [loading, setLoading] = useState(true);

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
		const response = await login(email, password);
		adopetAPI.defaults.headers['Authorization'] = `Bearer ${response.data}`;
		localStorage.setItem('@adopetAuth:data', response.data);
	};

	const signOut = () => {
		adopetAPI.defaults.headers['Authorization'] = null;
		localStorage.removeItem('@adopetAuth');
	};

	return (
		<AuthContext.Provider value={{
			authenticated: !!user, loading, user, signIn, signOut
		}}>
			{children}
		</AuthContext.Provider>
	);
};