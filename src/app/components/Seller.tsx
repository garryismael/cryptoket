import { FC } from "react";

type Props = {
  id: number;
  ranking: number;
  picture: string;
  name: string;
  price: number;
};

const Seller: FC<Props> = (props: Props) => {
  const { ranking, picture, name, price } = props;
  return (
    <div className="seller">
      <div className="ranking">
        <p className="text-sm font-semibold">{ranking}</p>
      </div>
      <img
        src={picture}
        alt={name}
      />
      <h2 className="font-semibold text-base text-center">{name}</h2>
      <p className="price text-base"><span className="font-semibold">{price}</span> ETH</p>
    </div>
  );
};

export default Seller;
