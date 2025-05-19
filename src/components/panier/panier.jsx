import './panier.css'
function Panier({ panier }) {
  return (
    <div className="panier">
      <h2>Panier</h2>
      <hr className="gradient-line" />
      <ul>
        {panier.map((item, index) => (
          <li key={index}>{item.name} - {item.price} €</li>
        ))}
      </ul>
    </div>
  );
}

export default Panier;
