// falta test
import React from "react"
import Footer from "../../components/footer/Footer"
import useRedirectIfAuthenticated from "../../hooks/useRedirecIfAuth"
import { useState } from "react"
import { useLoginForm, validateUsernameField } from "../../hooks/useLoginForm"
import { validatePasswordField } from "../../hooks/useLoginForm"
import { useForgotPassword } from "../../hooks/useForgotPass"
import ModalPass from "./modal/ModalPass"
const Login: React.FC<{}> = () => {

  const { register, handleSubmit, errors } = useLoginForm();
  const { email, error, successMessage, handleEmailChange, handleSubmit: handleForgotPasswordSubmit } = useForgotPassword()
  const [showModal, setShowModal] = useState(false);
  
  const handleForgotPasswordClick = () => {
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };
  
  useRedirectIfAuthenticated()

  return (
    <div className="section-form">
      <section className="container-form">

        <form className="form-login" onSubmit={handleSubmit} >
          <h1 className="Sign-in" > Sign in</h1>
          <label > Username</label>
          <input id="username"
            {...register("username", {

              validate: validateUsernameField
            })}
          />
          {errors.username && <p className="error-text">{errors.username.message}</p>}
          <label >Password</label>
          <input id="password"
            type="password"
            {...register("password", {
              validate: validatePasswordField
            })} />
          {errors.password && <p className="error-text">{errors.password.message}</p>}
          <a className="login-forgot-password" href="#"onClick={handleForgotPasswordClick} >Forgot Password?</a>
          <button type="submit">Sign in</button>
        </form>
      </section>
      <Footer />
      
      {showModal && (
        <ModalPass
          email={email}
          error={error}
          successMessage={successMessage}
          onEmailChange={handleEmailChange}
          onSubmit={handleForgotPasswordSubmit}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}




export default Login