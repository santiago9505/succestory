import React, { useContext, useCallback } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../firebase";
import { AuthContext } from "../auth/Auth";

//styles

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="sign">
      <div className="sign__square">
        <article className="sign__title--container">
          <h1>Ingresa</h1>{" "}
        </article>
        <form onSubmit={handleLogin} className="signup__form" action="">
          <label className="signup__question" htmlFor="">
            <span className="span">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20187.svg?alt=media&token=4ea1d4f6-aa34-4ccc-bba7-0f0c8dd57138"
                alt="email"
              />{" "}
              Correo Electrónico
            </span>
            <input
              name="email"
              placeholder="Email"
              className="signup__input input"
              type="email"
              required
            />
          </label>
          <label className="signup__question" htmlFor="">
            <span className="span">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20189.svg?alt=media&token=110298f2-3c41-4c07-b0c3-5b5534f1fdcb"
                alt="number"
              />{" "}
              Contraseña
            </span>
            <input
              name="password"
              placeholder="Email"
              className="signup__input input"
              type="password"
              required
            />
          </label>
          <div className="button__container--signup">
            <button className="register__button">REGISTRARSE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
