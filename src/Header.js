import  {AuthContext} from './AuthContext';
import { useContext } from 'react';


export default function Header ()  {

    const authContext = useContext(AuthContext);
    function logout (){
        authContext.setauth({})
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    }

     return (
      <nav className="navbar navbar-light bg-light mt-2 mb-2">
        <div className="container-fluid">
             <a className="navbar-brand h1">React</a>

             {authContext.auth.email ? <div>
               { authContext.auth.email}
                 {'   '}
                 <button className= 'btn btn-danger btn-sm' onClick = {logout}>Logout</button>

             </div> :'you need to login' }
        
        </div>
    </nav>
);
}