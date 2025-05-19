import './App.css';
import Achat from './components/achat/achat';
import Cards from './components/cards/cards';
import Nav from './components/Nav/nav';
import Up from './components/Up/Up';
import Panier from './components/panier/panier';
import productsData from './data/products.json';
import { useState } from 'react';

import Limonade from './assets/Limonade.png';
import orange from './assets/orange.png';
import vert from './assets/vert.png';
import Tea from './assets/Tea.png';

const images = {
  "Limonade.png": Limonade,
  "orange.png": orange,
  "fanta.png": vert,
  "the.png": Tea,
};

function App() {
  const [argent, setArgent] = useState(100); // Tu démarres avec 10€
  const [panier, setPanier] = useState([]);
  const [produits, setProduits] = useState(productsData);

  const handleAcheter = (id) => {
    const index = produits.findIndex(p => p.id === id);
    const produit = produits[index];

    // Vérifie qu’il reste du stock et que l’utilisateur a assez d’argent
    if (produit.stock > 0 && argent >= produit.price) {
      // Mise à jour du stock
      const newProduits = [...produits];
      newProduits[index] = { ...produit, stock: produit.stock - 1 };
      setProduits(newProduits);

      // Mise à jour de l’argent
      setArgent(argent - produit.price);

      // Mise à jour du panier
      setPanier([...panier, produit]);
    }
  };

  return (
    <>
      <Nav />
      <Up />
      <Cards />
      <div className="argent">Argent : {argent} €</div>

      <section id="carte">
        {produits.map((product) => (
          <Achat
            key={product.id}
            data={product}
            image={images[product.img]}
            argent={argent}
            onAcheter={() => handleAcheter(product.id)}
          />
        ))}
      </section>

      <Panier panier={panier} />
    </>
  );
}

export default App;
