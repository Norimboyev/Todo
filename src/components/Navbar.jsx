import { useContext, useState } from "react";
import searchIcon from "../assets/images/search.svg";
import backIcon from "../assets/images/back.svg";
import clearIcon from "../assets/images/close.svg";
import { TodoContext } from "../context/todoContext";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const reset = () => {
    setShow(true);
    setSearchValue("");
  };
  return (
    <header className="header">
      <div className="header__nav">
        {show ? (
          <>
            <button className="header__nav-lang">RU</button>
            <h1 className="header__nav-title">Заметки</h1>
            <button
              className="header__nav-search"
              onClick={() => setShow(false)}
            >
              <img src={searchIcon} alt="" />
            </button>
          </>
        ) : (
          <>
            <button className="header__nav-back" onClick={() => reset()}>
              <img src={backIcon} alt="" />
            </button>
            <input
              type="text"
              className="header__nav-input"
              placeholder="Поиск..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="header__nav-clear">
              <img src={clearIcon} alt="" />
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
