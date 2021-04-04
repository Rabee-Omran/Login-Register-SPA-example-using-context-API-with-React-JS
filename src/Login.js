export default function Login ()  {
    return (
        <form>
        <h3 className="text-center h1">Login</h3><br/>
        <div className="form-group">
          
            <input type="email" className="form-control" placeholder = 'email'/> <br/>
            <input type="text"  className="form-control" placeholder = 'password'/>  <br/>   

            <input type="submit"className="btn btn-primary btn-md" value="Send"/>
     
            </div>
    </form>
);
}