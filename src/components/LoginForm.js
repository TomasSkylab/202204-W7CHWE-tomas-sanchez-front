

const LoginForm = () => {

    

  return (
    
      <div className="login-page">
        <div className="form">
          <form className="login-form" autoComplete="off">
            <label htmlFor="username" />
            <input id="text" placeholder="Username" />
            <label htmlFor="password" />
            <input type="text" placeholder="Password" />
            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
   
  );
};

export default LoginForm;
