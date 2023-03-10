import React, { useRef } from "react";
import "./SearchBar.css";
import search_icon from "../../Assets/svg/Search.svg";
import { useContext } from "react";
import { OpenModalContext } from "../../Contexts/OrderModalContext/OrderModalContext";

export default function SearchBar() {
  const { setInput, setArchiveOrders } = useContext(OpenModalContext);

  const archiveBtn = useRef();
  const orderBtn = useRef();

  const activeOrders = () => {
    orderBtn.current.classList.remove("searchbar_btn_active");
    archiveBtn.current.classList.add("searchbar_btn_active");
    setArchiveOrders(true);
  };

  const activeArchive = () => {
    archiveBtn.current.classList.remove("searchbar_btn_active");
    orderBtn.current.classList.add("searchbar_btn_active");
    setArchiveOrders(false);
  };

  return (
    <div className="searchbar">
      <div className="container">
        <div className="searchbar_wrapper">
          <div className="searchbar_btn_group">
            <button
              ref={orderBtn}
              onClick={() => activeArchive()}
              className="my_orders_btn searchbar_btn_active"
            >
              My orders
            </button>
            <button
              ref={archiveBtn}
              onClick={() => activeOrders()}
              className="archive_orders_btn"
            >
              Archive orders
            </button>
          </div>

          <form className="search_form" action="">
            <div className="input_box">
              <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Search"
              />
              <img src={search_icon} alt="search icon" width="24" height="24" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
