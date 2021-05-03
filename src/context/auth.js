
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const AuthContext = createContext({ signed: false, user: {} });

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

     useEffect(() => {
        async function loadStorageData() {
            const storageToken = await AsyncStorage.getItem('@Juntou:token');
            const storageEmail = await AsyncStorage.getItem('@Juntou:token');
            const storageId = await AsyncStorage.getItem('@Juntou:token');

            if ( storageToken && storageEmail && storageId) {
                setUser(JSON.parse(storageToken),JSON.parse(storageEmail),JSON.parse(storageId));
                setLoading(false);
            } else if ( !storageToken) {
                setLoading(false);
            }
        }

        loadStorageData();
    }, [])

    async function signIn(data) {

		console.log(data)
     await AsyncStorage.setItem('@Juntou:user',JSON.stringify(data));
   
	 if(data ){
		setUser(data);

	 }

    }

    async function signOut() {
		AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    return (
        <AuthContext.Provider value={{ signed: !! user, user, signIn, signOut, loading }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;