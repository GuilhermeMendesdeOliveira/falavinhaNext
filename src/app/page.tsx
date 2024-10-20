import Botao from "./components/Botao";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header"


export default function Home() {
  return (
    <div className="flex flex-col justify-start gap-4 h-screen w-full main">
      <Header href="/Calculadora" titulo="GRUPO FALAVINHA NEXT TECHNOLOGY" tituloBtn="Calcular BPO"></Header>
      <div className="flex flex-grow justify-around p-4 gap-3 text-white">
        <div className="flex flex-col h-56 w-56 rounded-md justify-center items-center bg-zinc-800">
          <p>Calculadora BPO</p>
        </div>
        <div className="flex h-56 w-56 rounded-md justify-center items-center bg-zinc-800">
          <p>Calculadora Tributária</p>
        </div>
        <div className="flex h-56 w-56 rounded-md justify-center items-center bg-zinc-800">
          <p>Calculadora Contábil</p>
        </div>
        <div className="flex h-56 w-56 rounded-md justify-center items-center bg-zinc-800">
          <p>Questionário</p>
        </div>
        
      </div>
      <Footer />
      
    </div>
  );
}
