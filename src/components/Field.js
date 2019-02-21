import React, {Component} from 'react'
import Square from './Square'

class Field extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fieldMap: props.fieldMap,
        }
        this.squareSize = props.squareSize
        this.rows = props.rows
        this.columns = props.columns
        this.getStyle = () => {
            return {
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                alignItems: 'center',
                width: `${this.columns * this.squareSize}px`
            }
        }
        this.outsideBoxStyle = () => {
            return {
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    }

    componentWillReceiveProps({fieldMap}) {
        this.setState({...this.state, fieldMap})
    }

    render() {
        return (
            <div style={this.outsideBoxStyle()}>
                <div style={this.getStyle()}>
                    {
                        this.state.fieldMap.map((value, index) => {
                                return (
                                    <Square
                                        key={index}
                                        style={{flex: `1 0 ${this.columns - 1}%`, margin: '1px'}}
                                        value={value}
                                        squareSize={this.squareSize}
                                    />
                                )
                            }
                        )
                    }
                </div>
            </div>
        )
    }

}

export default Field
