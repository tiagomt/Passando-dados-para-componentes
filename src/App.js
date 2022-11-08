import React from 'react';
import Header from './components/Header'
import Body from './components/Body'
import './style.css'

function App() {

  // Subindo o state para um nivel acima dos componentes, ele será acessivel por ambos. State não poderá ser acessado se estiver apenas no elemento irmao
  const [user, setUser] = React.useState("Joe")

  return (
    <main>
      <Header userName={user} />
      <Body userName={user} />

    </main>
  );
}

export default App;
