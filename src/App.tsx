import React from "react";
import "./styles.css";

// Tipagem para o produto
interface ExemploDeProduto {
  id: number;
  nome: string;
  preco: string;
  foto: string;
}

// Componente de Card de Produto
const ProductCard: React.FC<{ produto: ExemploDeProduto }> = ({ produto }) => {
  return (
    <div className="product-card">
      <img src={produto.foto} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>R$ {produto.preco}</p>
      <button>Comprar</button>
    </div>
  );
};

// Dados de exemplo
const exemploDeProduto: ExemploDeProduto = {
  id: 1,
  nome: "Sobremesa Veg",
  preco: "11.90",
  foto: "https://free-images.com/lg/0541/breakfast_vegan_healthy_eat_0.jpg",
};

// Componente principal
const App: React.FC = () => {
  return (
    <div className="app-background">
      <ProductCard produto={exemploDeProduto} />
    </div>
  );
};

export default App;
