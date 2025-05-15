import React from "react";
import "./CreateAccount.css";
const handleSubmit = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  console.log(event);
  
  const formData = {
    email: event.target.email.value,
    password: event.target.password.value,
  };
  console.log("Form data:", formData);
  // You can make an API call or handle the form data here
};
const CreateAccount = () => {
  const handleGoogleSignIn = () => {
    alert("Google Sign-In clicked!");
  };

  return (
    <>
    <div className="container">
      <div className="logo">
        <img
          alt="bitly logo"
          height="50"
          src="https://storage.googleapis.com/a1aa/image/m1SDcshYhhboHJeLGp4wr5Jf2Poj3NpuwAlK8NHYf2Pe81JQB.jpg"
          width="100"
        />
      </div>
      <h1>Create your account</h1>
      <div className="subtext">
        Already have an account?{" "}
        <a href="#login">Log in</a> or <a href="#sso">Log in with SSO</a>
      </div>
      <div className="google-btn" onClick={handleGoogleSignIn}>
        <img
          alt="Google logo"
          height="20"
          src="https://storage.googleapis.com/a1aa/image/qsRSceeRBliK9EjHZGBhL0EeqFF94abI5h7lYALhwJNae1JQB.jpg"
          width="20"
        />
        <span>Continue with Google</span>
      </div>
      <div className="divider">OR</div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input name="email" placeholder="Email" type="email" required />
        </div>
        <div className="form-group">
          <input name="password" placeholder="Password" type="password" required />
        </div>
        <button className="submit-btn" type="submit">
          Create free account
        </button>
      </form>
      <div className="footer-text">
        By creating an account, you agree to Bitly's{" "}
        <a href="#terms">Terms of Service</a>,{" "}
        <a href="#privacy">Privacy Policy</a>, and{" "}
        <a href="#acceptable-use">Acceptable Use Policy</a>.
      </div>
    </div>
    </>
  );
};

export default CreateAccount;
