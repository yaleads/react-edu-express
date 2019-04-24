import math_info, {sum as math_sum, dif as math_dif, mult as math_mult, div as math_div} from '~/src/Math'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

math_info();
console.log(`3 + 4 = ${math_sum(3, 4)}`);
console.log(`5 - 4 = ${math_dif(5, 4)}`);
console.log(`5 * 4 = ${math_mult(5, 4)}`);
console.log(`90 / 5 = ${math_div(90, 5)}`);

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Hello World!</div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);