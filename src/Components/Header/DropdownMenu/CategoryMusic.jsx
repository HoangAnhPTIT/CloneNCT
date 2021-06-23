import React, { Component } from "react";

class CategoryMusic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listCategory = this.props.dataCategoryMusic;
    console.log(listCategory);
    const items = [];
    let index = 0;
    for (const country in listCategory) {

      items.push( 
        <ul>
          {listCategory[country].map((element) => {
            index++;
            console.log(index);
            <li key={index}>{element}</li>;
          })}
        </ul>
      );
    }

    return (
      <div className="dropdown-menu-category">
        {items}
      </div>
    );
  }
}

export default CategoryMusic;
