import { createContext, useState } from "react";

const context = createContext()

function Provider({children}){
  const [idade, setIdade] = useState(0);

  return(
    <context.Provider value={ {idade} }>
      {children}
    </context.Provider>
  )

}

export {context, Provider};
