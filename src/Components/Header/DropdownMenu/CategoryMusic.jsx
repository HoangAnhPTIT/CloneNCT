import React, { Component } from "react";

function createUl(data) {
  const items = [];
  for (const item in data) {
    items.push(
      <ul className="list-category">
        {data[item].map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    );
  }
  return items;
}
class CategoryMusic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dataCategory = this.props.dataCategory;
    const classN = this.props.classN;
    return <div className={classN}>{createUl(dataCategory)}</div>;
  }
}

export default CategoryMusic;
