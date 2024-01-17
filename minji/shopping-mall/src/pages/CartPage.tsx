import CartProduct from "../components/cart/CartProduct";

function CartPage() {
  return (
    <>
      <h2 className="text-center font-bold text-3xl mb-10">Cart</h2>
      <div className="flex flex-col gap-4 justify-center">
        {["dd", "df", "dfd", "fdfd"].map(() => (
          <CartProduct />
        ))}
      </div>
    </>
  );
}

export default CartPage;
