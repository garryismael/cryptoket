import { FC } from "react";

type Props = {
  className?: string;
};

const Logo: FC<Props> = (props: Props) => {
  const { className } = props;
  return (
    <div className="logo-square">
      <div className={`logo ${className || ""}`}>
        <div className="icon">
          <div className="circle"></div>
        </div>
        <h1>CryptoKet</h1>
      </div>
    </div>
  );
};

export default Logo;
