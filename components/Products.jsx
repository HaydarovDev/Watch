import Image from "next/image";

const Products = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/mens-watches"
  );

  const data = await response.json();
  console.log(data.products);
  return (
    <article className="w-full flex justify-center items-center my-3">
      <main className="w-[80%] flex justify-center items-center flex-col">
        <p className="text-[#3858D6]">Find your favourite smart watch.</p>
        <h1 className="text-2xl">Our Latest Products</h1>
        <div className="grid grid-cols-3 gap-10 mt-6">
          {data.products?.map((watch) => {
            return (
              <div key={watch.id}>
                <Image
                  src={watch.thumbnail}
                  width={100}
                  height={100}
                  alt=""
                  className="w-[300px] bg-[#F6F6F6]"
                />
                <h1 className="font-semibold text-center">{watch.title}</h1>
                <p className="text-2xl font-semibold text-center">
                  Price: {watch.price}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </article>
  );
};

export default Products;
