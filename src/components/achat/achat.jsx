import './achat.css';

function Achat({ data, image, argent, onAcheter }) {
  const { stock, name, price } = data;

  let classeCarte = 'Achat';
  if (stock === 1) classeCarte += ' low-stock';
  else if (stock === 0) classeCarte += ' out-of-stock';

  const disabled = stock === 0 || argent < price;

  return (
    <div className={classeCarte}>
      <div className="img-achat">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>Prix : {price} €</p>
      <p>Stock : {stock}</p>
      <button onClick={onAcheter} disabled={disabled}>
        {stock === 0 ? 'Épuisé' : 'Acheter'}
      </button>
    </div>
  );
}

export default Achat;
