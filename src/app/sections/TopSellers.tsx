import Seller from "../components/Seller";
import { top_sellers } from "../constants";

const TopSellers = () => {
  return (
    <section className="wrapper top-sellers">
      <h1 className="heading-3 mb-5">Top Sellers</h1>
      <div className="ranks">
        {top_sellers.map((seller, ranking) => (
          <Seller
            key={seller.id}
            ranking={ranking + 1}
            {...seller}
          />
        ))}
      </div>
    </section>
  );
};

export default TopSellers;
