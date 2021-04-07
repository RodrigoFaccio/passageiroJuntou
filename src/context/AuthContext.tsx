import React,{createContext, useCallback, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';


interface SignCredentials{
    email:string,
    token:string
}
interface AuthState{
    email:string,
    token:string,
}
interface AuthContextData{
    user:object,
    signIn(credentials:SignCredentials):void;
}
 const AuthContext = createContext<AuthContextData>({}as AuthContextData);

 const AuthProvider : React.FC = ({children})=>{
    const [data,setData] = useState<AuthState>( {} as AuthState);
    useEffect(()=>{
        async function loadStorageData():Promise<void>{
            const token = await AsyncStorage.getItem('@juntouApp:token');
            const email =await AsyncStorage.getItem('@juntouApp:email');
            const id = await AsyncStorage.getItem('@juntouApp:id');
            if(token && email && id){
                setData({
                    token,
                    email,
                })
            }
        }
        
        
        loadStorageData();
    },[]);

    const signIn = useCallback(async({email,token})=>{
        
       await AsyncStorage.multiSet([
           ['@juntouApp:token',token],
           ['@juntouApp',email],
       ]);
       setData({email,token})


    },[])
    return(
        <AuthContext.Provider value={{user:data,signIn}}>
            {children}
        </AuthContext.Provider>
    );
    function useAuth(): AuthContextData {
        const context = useContext(AuthContext);
        if(!context){
            throw new Error('Erro No authContext');
        }
        return context;

    }
};
function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('Erro No authContext');
    }
    return context;

}
export {AuthProvider,useAuth};