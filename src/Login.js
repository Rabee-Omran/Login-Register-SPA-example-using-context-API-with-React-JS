import {useState} from 'react';

export default function Login ()  {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login (e){
        e.preventDefault()
        // console.log({email, password})
        //send api request to validate data and get token
        if (password === '12345'){
            const token = 'abc';
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);

        }else{
            alert('Wrong data');
        }
    }

    return (
        <form>
        <h3 className="text-center h1">Login</h3><br/>
        <div className="form-group">
          
            <input type="email" className="form-control" placeholder = 'email'    value = {email}    onChange = {e => setEmail(e.target.value)}/> <br/>
            <input type="text"  className="form-control" placeholder = 'password' value = {password} onChange = {e => setPassword(e.target.value)} /> <br/>   

            <input type="submit"className="btn btn-primary btn-md" value="Send" onClick= {login}/>
     
            </div>
    </form>
);
}