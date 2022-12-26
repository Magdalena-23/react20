import { Component } from "react";

export default class LifecycleClassComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            counter : 8
        }
        console.log("constructor")
    }

    componentDidMount() {
        console.log("mount")
    }

    componentWillUnmount() {
        console.log("unmount")
    }

    //redosled na izvvrshuvanje(ciklusot na edna komponenta e): konstruktor, render, component did mount

    increment = () => {
        this.setState((state) => ({counter : state.counter + 10}))
    }

    render() {


        console.log("render")

        return <div>
            <hr />

            Class Component
            <br />
            counter : {this.state.counter}
            
            <br />
            <button onClick={this.increment}>Increment(Class)</button>
        </div>
    }

}