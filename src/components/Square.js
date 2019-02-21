import React, {Component} from 'react'

class Square extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: props.value,
            style: props.style,
            squareSize: props.squareSize
        }
        this.getColor = (value) => {
            switch (value) {
                case 1:
                    return 'green'
                default:
                    return 'white'
            }
        }
        this.getStyle = ({value, style, squareSize}) => {
            return Object.assign({}, style, {
                backgroundColor: this.getColor(value),
                border: '1px solid black',
                width: `${squareSize}px`,
                height: `${squareSize}px`,

            })
        }
    }

    componentWillReceiveProps({value}) {
        this.setState({...this.state, value})
    }

    render() {
        return <div style={this.getStyle(this.state)}/>
    }

}

export default Square
