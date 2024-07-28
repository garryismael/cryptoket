import { useState } from "react";

const useMenu = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleChange = () => {
    setToggle((p) => !p);
  };

  return { toggle, handleChange };
};

export default useMenu;
