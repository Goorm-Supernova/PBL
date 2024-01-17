function CartProduct() {
  return (
    <div className="w-full flex border border-gray-200 rounded-xl py-5 px-16 justify-between">
      <div className="flex gap-20">
        <div>물건 사진</div>
        <div>
          <div className="text-sm text-gray-400">물건 카테고리</div>
          <div className="font-bold text-lg">물건 이름</div>
          <div>물건 가격</div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="button"
          value="+"
          className="border border-gray-200 w-8 h-8"
        />
        {"1"}
        <input
          type="button"
          value="-"
          className="border border-gray-200 w-8 h-8"
        />
      </div>
    </div>
  );
}

export default CartProduct;
