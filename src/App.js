import React, {Component} from 'react';
import Field from './components/Field'

const rows = 15;
const columns = 10;
const squareSize = 40

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fieldMap: new Array(rows * columns).fill(0)
        }
        this.interval = null
    }

    render() {
        return (
            <div className="App">
                <Field
                    fieldMap={this.state.fieldMap}
                    rows={rows}
                    columns={columns}
                    squareSize={squareSize}/>
            </div>
        );
    }

    update() {
        const newFieldMap = this.state.fieldMap.slice()
        newFieldMap[1] = 1
        this.setState((state, props) => {
            return {
                fieldMap: newFieldMap.slice()
            }
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.update(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

}

export default App;
