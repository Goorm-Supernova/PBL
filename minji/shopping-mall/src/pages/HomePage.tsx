import Product from "../components/home/Product";
import Tag from "../components/home/Tag";

function HomePage() {
  return (
    <>
      <h2 className="text-center font-bold text-3xl mb-10">Products</h2>
      <div className="flex gap-4 justify-center">
        {["모두", "전자기기", "쥬얼리", "남성의류"].map((v) => (
          <Tag
            key={Math.random()}
            onClick={() => {}}
            value={v}
            selected={false}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-5 mt-10">
        {["가방", "ㅇㄹㄴ", "ㅇㄴㄹ", "가방", "ㅇㄹㄴ", "ㅇㄴㄹ", "ㅇㄴㄹ"].map(
          () => (
            <Product />
          )
        )}
      </div>
    </>
  );
}

export default HomePage;
