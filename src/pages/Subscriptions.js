import data from "../data";
import "./Pages.css";

function Subscriptions({cart, setCart, setWarning}) {

  // Add Item to Cart
  const addToCart = (item) => {

    const isSubscription = item.id <= 4;

    const existingSubscription = cart.find((cartItem) => cartItem.id <= 4);

    // Prevent multiple subscriptions
    if (isSubscription && existingSubscription) {

      setWarning("Only one subscription can be added at a time.");

      setTimeout(() => {setWarning("");
      }, 3000);

      return;
    }

    // Check if item already exists
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    // Allow EZTech items multiple times
    if (existingItem && item.id > 4) {
      setCart(cart.map((cartItem) => cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem));
    } else {
      setCart([...cart, {id: item.id, title: item.service, price: item.price, quantity: 1, image: item.img}]);
    }
  };

  return (
    <div className="page">

      <h2>Subscriptions</h2>

      <div className="subscription-grid">

        {data.map((item) => (

          <div key = {item.id} className="subscription-card">
            <img src={item.img} alt={item.service}/>

            <h3>{item.service}</h3>
            <p>{item.serviceInfo}</p>

            <h4>${item.price}</h4>

            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subscriptions;