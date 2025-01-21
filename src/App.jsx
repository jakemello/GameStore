import logoHeader from '../src/assets/logoHeader.png';
import lupa from '../src/assets/lupa.png';

export default function App() {
  const produtos = [
    {
      imagem: "./src/assets/gta.png",
      titulo: "GTA Grand Theft Auto San Andreas - PS3 Mídia Digital",
      precoOriginal: "R$39,95",
      precoAtual: "R$27,95",
      desconto: "-30%",
      parcelas: "6x de R$5,67",
      botaoComprar: 'Comprar' 
    },
    {
      imagem: "./src/assets/milesmorales.png",
      titulo: "Marvel's Spider-Man: Miles Morales - PS4 Mídia Digital",
      precoOriginal: "R$97,95",
      precoAtual: "R$77,95",
      desconto: "-20%",
      parcelas: "12x de R$8,45",
      botaoComprar: 'Comprar'
    },
    {
      imagem: "./src/assets/mortal.png",
      titulo: "Mortal Kombat XL - PS5 Mídia Digital",
      precoOriginal: "R$69,90",
      precoAtual: "R$17,95",
      desconto: "-74%",
      parcelas: "4x de R$5,32",
      botaoComprar: 'Comprar'
    },
    {
      imagem: "./src/assets/senua.png",
      titulo: "Hellblade: Senua's Sacrifice - PS5",
      precoOriginal: "R$89,90",
      precoAtual: "R$37,95",
      desconto: "-58%",
      parcelas: "9x de R$5,31",
      botaoComprar: 'Comprar'
      
    },
    {
      imagem: "./src/assets/resident.png",
      titulo: "Resident Evil - PS5 Mídia Digital",
      precoOriginal: "R$57,95",
      precoAtual: "R$27,95",
      desconto: "-52%",
      parcelas: "6x de R$5,67",
      botaoComprar: 'Comprar'
      
    },
    {
      imagem: "./src/assets/outlast.png",
      titulo: "Outlast 2 - PS5 Mídia Digital (Útimas Unidades)",
      precoOriginal: "R$97,95",
      precoAtual: "R$47,95",
      desconto: "-51%",
      parcelas: "12x de R$5,20",
      botaoComprar: 'Comprar'
      
    },
    {
      imagem: "./src/assets/need.png",
      titulo: "Need for Speed - PS5 Mídia Digital",
      precoOriginal: "R$67,90",
      precoAtual: "R$27,95",
      desconto: "-60%",
      parcelas: "6x de R$5,67",
      botaoComprar: 'Comprar'
      
    },{
      imagem: "./src/assets/fc2024.png",
      titulo: "EA Sports FC 24 Fifa para PC - PT BR (Últimas Unidades) ",
      precoAtual: "R$359,90",
      parcelas: "12x de R$39,03",
      desconto: "Desconto de 10% no boleto",
      botaoComprar: 'Comprar'  
    },
  ];

  return (
    <main>
      <header>
        <section className="logoHeader">
          <img src={logoHeader} alt="Imagem logo com um par de mãos segurando um controle de videogame verde com detalhes preto e vermelho"/>
          <h1 className="H1">Ultimate Games Store</h1>
        </section>
        <nav>
          <ul>
            <li>SOBRE</li>
            <li>CARRINHO</li>
            <li>DÚVIDAS</li>
          </ul>
        </nav>
      </header>

      <h1>JOGOS</h1>
      <section className="produtos">
        {produtos.map((produto) => (
          <div className="produto">
            <img src={produto.imagem} alt={produto.titulo} />
            <h2>{produto.titulo}</h2>
            <p className="precoOriginal">{produto.precoOriginal}</p>
            <p className="precoAtual">{produto.precoAtual}</p>
            <p className="parcelas">{produto.parcelas}</p>
            <p className="desconto">{produto.desconto}</p>
            <button className="comprar">{produto.botaoComprar}</button>
          </div>
        ))}
      </section>
      <footer>
        <p> © Copyright 2025 Ultimate Games Store. All Rights Reserved</p>
      </footer>
    </main>
  )
}
    
