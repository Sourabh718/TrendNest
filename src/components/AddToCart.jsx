import { useAppContext } from "../context/AppContext";

function AddToCart({ product }) {
  const { addToCart } = useAppContext();
  return (
    <>
      <div className="addToCart">
        <button onClick={() => alert("Item added to cart")}>Add To Cart</button>
      </div>
    </>
  );
}
export default AddToCart;
