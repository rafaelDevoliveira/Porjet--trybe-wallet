import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <div className="login">
        <img
          src="https://www.acate.com.br/wp-content/uploads/2020/01/trybe.png"
          alt="imagem"
        />
        <form>
          <input
            className="email"
            type="email"
            data-testid="email-input"
            placeholder="Digite seu Email"
          ></input>
          <input
            className="password"
            type="password"
            data-testid="password-input"
            placeholder="Digite sua senha"
          ></input>
        </form>
          <button className="btn_Entrar" type="button">Entrar</button>
      </div>
    </div>
  );
}
