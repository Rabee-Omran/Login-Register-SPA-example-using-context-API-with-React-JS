export default function Header ()  {
     return (
      <nav className="navbar navbar-light bg-light mt-2 mb-2">
        <div className="container-fluid">
             <a className="navbar-brand h1">React</a>

             {true ? <div>
                 rabee@gmail.com 
                 {'   '}
                 <button className= 'btn btn-danger btn-sm'>Logout</button>

             </div> :'you need to login' }
        
        </div>
    </nav>
);
}