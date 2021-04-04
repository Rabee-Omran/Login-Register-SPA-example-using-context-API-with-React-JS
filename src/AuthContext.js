import React,{useState, useEffect}  from 'react';


export const AuthContext = React.createContext();

export function AuthProvider (props){
     const [auth, setauth] = useState({})

     useEffect(()=> {
        const token =  localStorage.getItem('token');
        const email =  localStorage.getItem('email');

        if(email){
            setauth({token, email});
        }
     },[]);

 return <AuthContext.Provider value = {{auth, setauth}}>
     {props.children}
 </AuthContext.Provider>
}   