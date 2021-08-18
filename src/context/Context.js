import { createContext, useState } from "react";

const context = createContext();

function Provider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState('');
  const [result, setResult] = useState("");
  const [btn, setBtn]= useState(true);
  const [despesasTotais, setDespesasTotais]= useState(0)

  function clicado() {
    setResult(email);
    setEmail("")    
  }
  

  return (
    <context.Provider value={{  result, email, setEmail, clicado, btn, setBtn, password, setPassword,despesasTotais, setDespesasTotais }}>
      {children}
    </context.Provider>
  );
}

export { context, Provider };
