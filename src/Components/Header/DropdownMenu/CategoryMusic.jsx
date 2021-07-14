import React from "react";

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
export default function CategoryMusic(props) {
  const dataCategory = props.dataCategory;
  const classN = props.classN;
  return <div className={classN}>{createUl(dataCategory)}</div>;
}
