import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import Logo from "../components/Logo";
import useMenu from "../hooks/useMenu";

const Header = () => {
  const { toggle, handleChange } = useMenu();
  return (
    <>
      <header className="header">
        <Logo />
        <div className={`search-input ${toggle ? "active" : ""}`}>
          <input
            placeholder="Search Item Here"
            className="text-xs"
          />
          <FaMagnifyingGlass size={24} />
        </div>
        <div
          className="menu_burger flex items-center justify-center"
          onClick={handleChange}
        >
          <FaBars size={30} />
        </div>
      </header>
      {toggle && (
        <div className="menu">
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-lg font-semibold"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg font-semibold"
                >
                  My Items
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg font-semibold"
                >
                  Following
                </a>
              </li>
            </ul>
          </nav>
          <div className="actions">
            <a
              href="#"
              className="text-base font-semibold btn create"
            >
              Create
            </a>
            <a
              href="#"
              className="text-base font-semibold btn connect"
            >
              Connect
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
