import React, { Component } from "react";
import ListMenu from "./ListMenu";

const listName = [
  "Bài hát",
  "Playlist",
  "Tuyển Tập",
  "Video",
  "BXH",
  "Chủ Đề",
  "Top100",
];

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
              <li class="header-menuselect-item">
                <div className="header__menuselect-search header__menuselect--shadow"></div>
              </li>
              <li class="header-menuselect-item">
                <a href="">
                  <div className="header__menuselect-headphone header__menuselect--shadow"></div>
                </a>
              </li>
              <li class="header-menuselect-item">
                <div className="header__menuselect-upload header__menuselect--shadow"></div>
              </li>
              <li class="header-menuselect-item">
                <a href="">
                  <div className="header__menuselect-coins"></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
