import './App.css';

import Header from './components/Header'
import Container from './components/Container'
import Input from './components/Input'
import Button from './components/Button'

function App() {
  return (
    <>
      <Header />
      <Container>
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <Button>Enviar</Button>
      </Container>
    </>
  );
}
export default App;
