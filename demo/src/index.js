import React, {Component} from 'react'
import {render} from 'react-dom'
import {css} from 'emotion'
import {injectGlobal} from 'emotion'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

import NumberInput from '../../src'

class Example1 extends Component {

    state = {
        value: 1
    }

    render() {
        return <div>
            <h2>
                Integer
            </h2>
            <div
                className={css`
                    width: 200px;
                `}
            >
                <NumberInput
                    value={this.state.value}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </div>
            <h3>
                State
            </h3>
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
        </div>
    }
}

class Example2 extends Component {

    state = {
        value: 1.1
    }

    render() {
        return <div>
            <h2>
                Decimal
            </h2>
            <div
                className={css`
                    width: 200px;
                `}
            >
                <NumberInput
                    value={this.state.value}
                    format={'decimal'}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </div>
            <h3>
                State
            </h3>
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
        </div>
    }
}

class Example3 extends Component {

    state = {
        value: 1.24
    }

    render() {
        return <div>
            <h2>
                Decimal with precision of 8
            </h2>
            <div
                className={css`
                    width: 200px;
                `}
            >
                <NumberInput
                    value={this.state.value}
                    format={'decimal'}
                    precision={8}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </div>
            <h3>
                State
            </h3>
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
        </div>
    }
}


class Demo extends React.Component {

    render() {

        return (
            <div>
                <h1>NumberInput Demo</h1>
                <Example1/>
                <Example2/>
                <Example3/>
            </div>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
