

const LoginForm = () => {

    const LoginForm = () => {
  const blankFields = {
    username: "",
    password: "",
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(blankFields);

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const submitLogin = (event) => {
    event.preventDefault();
    dispatch(loginThunk(formData));
  };

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
