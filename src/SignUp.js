import logo from './logo.svg';
import './SignUp.css';

function SignUp() {
  return (
    <div className="SignUp">
      <header className="SignUp-title">
        <p className="LargeText">SignUp</p>
        <p className="SmallText">Full Name</p>
        <p className="SmallText">Email</p>
        <p className="SmallText">Password</p>
        <p className="SmallText">Password Verify</p>
       
        <a
          className="SignUp-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn 
        </a>    
      </header>

    </div>

  );
}

export default SignUp;
