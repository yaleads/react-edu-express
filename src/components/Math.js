import React, { Component } from 'react'
import math_info, {sum as math_sum, dif as math_dif, mult as math_mult, div as math_div} from '~/src/Math'

class Math extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li>{math_info()}</li>
        <li>3 + 4 =  {math_sum(3, 4)}</li>
        <li>5 - 4 =  {math_dif(5, 4)}</li>
        <li>5 * 4 =  {math_mult(5, 4)}</li>
        <li>90 / 5 = {math_div(90, 5)}</li>
      </ul>
    );
  }
}

export default Math;