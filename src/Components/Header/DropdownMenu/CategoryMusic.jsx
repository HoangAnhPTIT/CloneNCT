import React, { Component } from 'react';

class CategoryMusic extends Component {
  render() {
    return (
      <div className="dropdown-menu">
        <table>
          <tr>
            <th>VIỆT NAM</th>
            <th>ÂU MỸ</th>
            <th>CHÂU Á</th>
            <th>KHÁC</th>
          </tr>
        </table>
      </div>
    );
  }
}

export default CategoryMusic;