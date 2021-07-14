import React from "react";
import logoNct from "../../images/logo_nct.png";
import icNew from "../../images/ic_new.png";
import CategoryMusic from "./DropdownMenu/CategoryMusic";

const dataCategoryMusic = {
  1: [
    "VIỆT NAM",
    "Nhạc Trẻ",
    "Trữ Tình",
    "Remix Việt",
    "Rap Việt",
    "Tiền Chiến",
    "Nhạc Trịnh",
    "Rock Việt",
    "Cách Mạng",
  ],
  2: [
    "Âu Mỹ",
    "POP",
    "Rock",
    "Electronica/Dance",
    "R&B/HipHop/Rap",
    "Blues/Jazz",
    "Country",
    "Latin",
    "Indie",
    "Âu Mỹ khác",
  ],
  3: [
    "Âu Mỹ",
    "POP",
    "Rock",
    "Electronica/Dance",
    "R&B/HipHop/Rap",
    "Blues/Jazz",
    "Country",
    "Latin",
    "Indie",
    "Âu Mỹ khác",
  ],
  4: [
    "Âu Mỹ",
    "POP",
    "Rock",
    "Electronica/Dance",
    "R&B/HipHop/Rap",
    "Blues/Jazz",
    "Country",
    "Latin",
    "Indie",
    "Âu Mỹ khác",
  ],
};

const dataCategoryList = {
  1: [
    "THỂ LOẠI",
    "Nhạc Trẻ",
    "Trữ Tình",
    "Pop",
    "Nhạc Hàn",
    "Nhạc Hoa",
    "Soundtrack",
    "Không Lời",
  ],
  2: [
    "THỂ LOẠI",
    "Nhạc Trẻ",
    "Trữ Tình",
    "Pop",
    "Nhạc Hàn",
    "Nhạc Hoa",
    "Soundtrack",
    "Không Lời",
  ],
  3: [
    "THỂ LOẠI",
    "Nhạc Trẻ",
    "Trữ Tình",
    "Pop",
    "Nhạc Hàn",
    "Nhạc Hoa",
    "Soundtrack",
    "Không Lời",
  ],
  4: [
    "THỂ LOẠI",
    "Nhạc Trẻ",
    "Trữ Tình",
    "Pop",
    "Nhạc Hàn",
    "Nhạc Hoa",
    "Soundtrack",
    "Không Lời",
  ],
  5: [
    "THỂ LOẠI",
    "Nhạc Trẻ",
    "Trữ Tình",
    "Pop",
    "Nhạc Hàn",
    "Nhạc Hoa",
    "Soundtrack",
    "Không Lời",
  ],
};

function passData(index) {
  if (index < 2) return dataCategoryMusic;
  return dataCategoryList;
}
export default function ListMenu(props) {
  const listName = props.listName;
  return (
    <ul className="hearder_navbar-list">
      <li className="hearder_navbar-item">
        <a href="">
          <img src={logoNct} alt="LoGo" />
        </a>
      </li>
      <li className="hearder_navbar-item">
        <a href="">
          <img
            className="hearder_navbar-item--version"
            src={icNew}
            alt="new version"
          />
        </a>
      </li>
      {listName.map((element, index) => (
        <li
          className={
            "hearder_navbar-item hearder_navbar-item--menu menu-item-" + index
          }
          key={index}
        >
          {element}
          <CategoryMusic
            classN={
              "hearder_navbar-item-dropdown-category menu-list-" + index
            }
            dataCategory={passData(index)}
            key={index}
          />
        </li>
      ))}
      <li className="hearder_navbar-item">
        <div className="iconThreeDot" />
      </li>
    </ul>
  );
}

