import { hot_bids } from "@/app/constants";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

const HotBids = () => {
  return (
    <section className="wrapper hot-bids">
      <h1 className="heading-3 mb-5">Hot Bids</h1>
      <div className="bids">
        {hot_bids.map((bid) => (
          <div
            className="bid"
            key={bid.id}
          >
            <div className="picture">
              <img src={bid.picture} />
            </div>
            <h1 className="paragraph-3 title">{bid.name}</h1>
            <div className="bottom">
              <p className="price text-xs">
                <span className="font-semibold">{bid.price}</span>
                <span>ETH</span>
              </p>
              <div className="like text-xs">
                {bid.liked ? <FaHeart /> : <FaRegHeart />}
                <p>{bid.likes}</p>
              </div>
            </div>
          </div>
        ))}
        <button className="btn font-semibold text-base load-more">Load More</button>
      </div>
    </section>
  );
};

export default HotBids;
