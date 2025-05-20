import './panier.css'

function Panier({ panier, images, setPanier, setArgent, setProduits }) {
  const groupedProducts = panier.reduce((acc, product) => {
    if (!acc[product.id]) {
      acc[product.id] = { ...product, quantity: 1 };
    } else {
      acc[product.id].quantity += 1;
    }
    return acc;
  }, {});

  const productsArray = Object.values(groupedProducts);

  const retirerProduit = (product) => {
    // Rembourser 
    setArgent(prev => +(prev + product.price).toFixed(2));

    // Retirer produit du panier
    const index = panier.findIndex(p => p.id === product.id);
    if (index !== -1) {
      const newPanier = [...panier];
      newPanier.splice(index, 1); // Retire un seul élément
      setPanier(newPanier);
    }

    // Rétablir le stock
    setProduits(prev =>
      prev.map(p => p.id === product.id ? { ...p, stock: p.stock + 1 } : p)
    );
  };

  return (
    <div className='panier'>
        <div id='le-hr'>
        <hr />
        </div>
      {productsArray.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        productsArray.map((product) => (
          <div key={product.id} id='div-pro'>
            <img src={images[product.img]} alt={product.name} style={{ width: '50px', marginRight: '10px' }} />
            <span>
              bouteille de {product.name} : {product.quantity}
            </span>
            <button onClick={() => retirerProduit(product)} id='btn-retirer'>
              Retirer
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Panier;
