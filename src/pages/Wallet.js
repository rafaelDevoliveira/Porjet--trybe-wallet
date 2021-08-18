import React, { useContext } from "react";
import { context } from "../context/Context";
import "./wallet.css";

export default function Wallet() {
  const { result, despesasTotais } = useContext(context);

  return (
    <div id="container-boas-vindas">
      <div className="container-gastos">
        <h2>Seja bem Vindo</h2>
        <p data-testid="email-field">{result}</p>
        <p>Total de gastos R$ {Math.round(despesasTotais).toFixed(2)} BRL</p>
      </div>
      <hr />
      <div className="container-form">
        <div className="container-teste">
          <form className="test-form">
            <label className="label">
              Valor:
              <input className="test-input" type="text" name="Despesa" />
            </label>
            <label className="label">
              Descrição:
              <input className="test-input" type="text" name="Descrição" />
            </label>
            <label className="label">
              Moeda:
              <select className="test-input" >
                <option>USD</option>
              </select>
            </label>
            <label className="label">
              Método de pagamento:
              <select className="test-input">
                <option>Dinheiro</option>
                <option>Cartão de crédito</option>
                <option>Cartão de débito</option>
              </select>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
