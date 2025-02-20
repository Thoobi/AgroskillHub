import foodprod from "../../foodprod.json";

interface FoodProd {
  title: string;
  description: string;
  rating: number;
  price: number;
  image: string;
  lessons: number;
  students: number;
}

const FoodProduction = () => {
  return (
    <div className="flex flex-row gap-6 w-full">
      {foodprod.map((item: FoodProd, index: number) => (
        <div key={index} className="w-[302px]">
          <h1>{item.title}</h1>
          <p>{item.rating}</p>
          <p>{item.price}</p>
          <div>
            <img src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodProduction;
