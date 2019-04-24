import React, { Component } from 'react'

class Check extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const check = {
      items: [
        {id: 1, name: 'Item 1', count: 10, price: 100},
        {id: 2, name: 'Item 2', count: 3,  price: 50},
        {id: 3, name: 'Item 3', count: 1,  price: 1000},
      ]
    };

    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Count</td>
            <td>Price</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {
            check.items.map ( item =>
             <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.price}</td>
                <td>{item.count * item.price}</td>
             </tr>
            )
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Total</td>
            <td>{check.items.reduce((prev,next) => prev + next.count * next.price, 0)}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default Check;