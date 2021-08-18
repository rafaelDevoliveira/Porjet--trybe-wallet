import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// import validator from 'validator'
import "./Login.css";
import { context } from "../context/Context";

export default function Login() {
  const { clicado, email, setEmail, btn, setBtn, password, setPassword } =
    useContext(context);
  useEffect(() => {
    const regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;
    const senha = 6;
    if (regex.test(email) && password.length > senha) {      
      setBtn(false);
    } else {
      setBtn(true);      
    }
  }, [email, password]);

  return (
    <div className="container-main">
      <div className="login">
        <img
          src="https://www.acate.com.br/wp-content/uploads/2020/01/trybe.png"
          alt="imagem"
        />
        <h1>Wallet</h1>
        <form className="form">
          <label>
            <input
              className="input-email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              data-testid="email-input"
              placeholder="Digite seu Email"
            ></input>
          </label>
          <input
            className="input-email"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password-input"
            placeholder="Digite sua senha"
          ></input>
        </form>
        <Link to="/carteira">
          <button
            disabled={btn}
            onClick={clicado}
            className="btn_Entrar"
            type="button"
          >
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
}
