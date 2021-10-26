import React from "react"

class Counter extends React.Component {
    constructor() {
        super() // permet de récupérer les props
    }

    render() {
        console.log(this.props);
        return (
            <>
                <h2>{this.props.count1}</h2>
                <h2>{this.props.count2}</h2>
                <button onClick={this.props.substract}>-</button>
                <button onClick={this.props.increment}>+</button>
            </>
        )
    }
}
export default Counter
