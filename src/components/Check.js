import React, { Component } from 'react'

class Check extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

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
            this.props.check.items.map ( item =>
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
            <td>{this.props.check.items.reduce((prev,next) => prev + next.count * next.price, 0)}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default Check;