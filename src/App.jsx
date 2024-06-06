import { useState } from 'react';
import "./App.css";

const tarefas = ["Estudar UseState" ,"Escrever Código" , "Testar", "Praticar"];

function App() {
  const [lista, setlista] = useState(tarefas);

  const itens = [];

  for (let item of lista) {
    itens.push(<li>{item}</li>);
  }

  return (
    <>
      <h2>Lista de Tarefas!</h2>
      <ol>{itens}</ol>
      </>
  );
}

export default App;
 