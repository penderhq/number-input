import React, {Component} from 'react'
import {Canvas, Heading, Paragraph, Box} from '@pndr/demo-utils'
import {render} from 'react-dom'
import {css} from 'emotion'
import {injectGlobal} from 'emotion'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

import NumberInput from '../../src'

const inputStyles = css`
    font-size: 16px;
`

class Example1 extends Component {

    state = {
        value: 1
    }

    render() {
        return <div>
            <Heading>
                Integer
            </Heading>
            <Box>
                <NumberInput
                    className={inputStyles}
                    value={this.state.value}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}

class Example2 extends Component {

    state = {
        value: 1.1
    }

    render() {
        return <div>
            <Heading>
                Decimal
            </Heading>
            <Box>
                <NumberInput
                    className={inputStyles}
                    value={this.state.value}
                    format={'decimal'}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}

class Example3 extends Component {

    state = {
        value: 1.24
    }

    render() {
        return <div>
            <Heading>
                Decimal with precision of 8
            </Heading>
            <Box>
                <NumberInput
                    className={inputStyles}
                    value={this.state.value}
                    format={'decimal'}
                    precision={8}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}

class Example4 extends Component {

    state = {
        value: 1.24
    }

    render() {
        return <div>
            <Heading>
                Controlled
            </Heading>
            <Box>
                <NumberInput
                    className={inputStyles}
                    value={this.state.value}
                    format={'decimal'}
                    precision={2}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Box>
                <NumberInput
                    className={inputStyles}
                    value={this.state.value}
                    format={'decimal'}
                    precision={2}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}


class Demo extends React.Component {

    render() {

        return (
            <Canvas>
                <Example1/>
                <Example2/>
                <Example3/>
                <Example4/>
            </Canvas>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
