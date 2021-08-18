import React, { useContext } from "react";
import { context } from "../context/Context";
import "./wallet.css";

export default function Wallet() {
  const { result, despesasTotais, setDespesasTotais } = useContext(context);

  return (
    <div className="container-boas-vindas">
      <div className="container-gastos">
        <h2 className="user">Seja bem Vindo</h2>
        <p data-testid="email-field">{result}</p>
        <p>Total de gastos R$ {Math.round(despesasTotais).toFixed(2)} BRL</p>
      </div>
      <hr />
      <form className="user">
        <label>
          Valor:
          <input type="text" name="Despesa" />
        </label>
        <label>
          Descrição:
          <input type="text" name="Descrição" />
        </label>
        <label>
          Moeda:
          <select>
            <option>USD</option>
          </select>
        </label>
        <label>
        Método de pagamento:
          <select>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      </form>
    </div>
  );
}
