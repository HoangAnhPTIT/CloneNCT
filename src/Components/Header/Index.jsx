import React, { useState } from "react";
import ListMenu from "./ListMenu";
import nologin from "../../images/nologin_user.png";
import arrowDown from "../../images/arrow_down.png";
import BoxLogin from "./BoxLogin"
const listName = [
  "Bài hát",
  "Playlist",
  "Tuyển Tập",
  "Video",
  "BXH",
  "Chủ Đề",
  "Top100",
];

export default function Header() {
  const [searchClass, setSearchClass] = useState("");
  const [hiddenClass, setHiddenClass] = useState("");

  const changeClassSearch = () => {
    setSearchClass(searchClass === "" ? "onFocusSearch" : "")
    setHiddenClass(hiddenClass === "" ? "header-menuselect-item--hidden" : "")
  };

  return (
    <div className="subMenu">
      <div className="header">
        <div className="header__navbar">
          <ListMenu listName={listName} />
        </div>
        <div className="header__menuselect">
          <ul className="header__menuselect-list">
            <li class="header-menuselect-item header-menuselect-item--vip">
              <a className="header__menuselect-vip" href="">
                NÂNG CẤP VIP
              </a>
            </li>
            <div className={"header-menuselect-background " + searchClass}>

              <li className="header-menuselect-item">
                <div
                  className={
                    "header__menuselect-search header__menuselect--shadow "
                  }
                  onClick={changeClassSearch}
                ></div>
                <input
                  className={
                    "header-menuselect-item-input-search " +
                    searchClass
                  }
                  type="text"
                  placeholder="Tìm bài hát, video, playlist, ca sĩ"
                />
              </li>
              <li
                className={"header-menuselect-item " + hiddenClass}
              >
                <a href="">
                  <div className="header__menuselect-headphone header__menuselect--shadow"></div>
                </a>
              </li>
              <li
                className={"header-menuselect-item " + hiddenClass}
              >
                <div className="header__menuselect-upload header__menuselect--shadow"></div>
              </li>
              <li
                className={"header-menuselect-item " + hiddenClass}
              >
                <a href="">
                  <div className="header__menuselect-coins"></div>
                </a>
              </li>
              <li
                className={
                  "hearder_navbar-item hearder_navbar-item-cluser " +
                  hiddenClass
                }
              >
                <div className="hearder_navbar-item-login-wrap">
                  <div className="form-login">
                    <div className="hearder_navbar-item-login">
                      <img
                        className="hearder_navbar-item-login-img"
                        src={nologin}
                        alt=""
                      />
                      <b className="hearder_navbar-item-text-login">Đăng nhập</b>
                      <img
                        className="hearder_navbar-item-arrow-down"
                        src={arrowDown}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                < BoxLogin />

              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
