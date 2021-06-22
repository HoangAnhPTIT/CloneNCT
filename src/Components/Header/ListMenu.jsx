import React, { Component } from "react";
import logoNct from "../../images/logo_nct.png";
import icNew from "../../images/ic_new.png";
import icon from "../../images/icon-repeat.png";

class ListMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listName = this.props.listName;
    return (
      <ul className="hearder_navbar-list">
        <li className="hearder_navbar-item">
          <a href="">
            <img src={logoNct} alt="LoGo" />
          </a>
        </li>
        <li className="hearder_navbar-item">
          <a href="">
            <img className="hearder_navbar-item--version" src={icNew} alt="new version" />
          </a>
        </li>
        {listName.map((element, index) => (
          <li
            className="hearder_navbar-item hearder_navbar-item--menu"
            key={index}
          >
            {element}
          </li>
        ))}
        <li className="hearder_navbar-item">
          <div className="iconThreeDot" />
        </li>
      </ul>
    );
  }
}

export default ListMenu;
