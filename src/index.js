import React from 'react'
import PropTypes from 'prop-types'
import parseNumber from './utils/parseNumber'
import formatNumber from './utils/formatNumber'
import {css, cx} from 'emotion'

/**
 * Outlines
 * -----------
 *
 * componentDidMount
 *  - set input value to formatted version of number prop
 *
 * input.onChange
 *  - trigger onChange with formatted version of value
 *
 * input.onBlur
 *  - set input value to formatted version of number prop
 */
export default class NumberField extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        className: PropTypes.string,
        value: PropTypes.number,
        allowNegative: PropTypes.bool,
        format: PropTypes.oneOf(['decimal', 'integer']),
        precision: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
        onChange: PropTypes.func.isRequired
    }

    static defaultProps = {
        allowNegative: false,
        format: 'integer',
        precision: 2
    }

    state = {
        editing: false,
        number: null
    }

    formatNumber = (input) => {
        return formatNumber(input, {
            allowNegative: this.props.allowNegative,
            format: this.props.format,
            precision: this.props.precision
        })
    }

    parseNumber = (input) => {
        return parseNumber(input, {
            allowNegative: this.props.allowNegative,
            format: this.props.format,
            precision: this.props.precision
        })
    }

    componentDidMount() {

        this.setState({
            number: this.formatNumber(this.props.value)
        })
    }

    componentWillUpdate(nextProps) {

        if (this.state.editing) {
            return
        }

        const nextNumber = this.formatNumber(this.props.value)
        const prevNumber = this.state.number

        if (prevNumber !== nextNumber) {
            this.setState({
                number: nextNumber
            })
        }
    }

    render() {

        const {number} = this.state

        return (
            <input
                data-context-id={this.props.contextId}
                data-role-id={this.props.roleId}
                type="text"
                className={cx(
                    'NumberInput',
                    css`
                    -moz-appearance: none;
                    -webkit-appearance: none;
                    -webkit-transition: border-color .15s ease-in-out;
                    appearance: none;
                    background-color: #fff;
                    border: 1px solid #d9d9d9;
                    border-radius: 3px;
                    color: #191919;
                    display: block;
                    font-size: 16px;
                    height: 38px;
                    line-height: 1.42857;
                    padding: 5px 15px;
                    transition: border-color .15s ease-in-out;
                    width: 280px;
                    max-width: 100%;
                    &:focus {
                        -webkit-transition-duration: 0s;
                        border-color: #07f;
                        outline: 0;
                        transition-duration: 0s;
                    }
                    `,
                    this.props.className
                )}
                value={number || ''}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
            />
        )
    }

    handleFocus = () => {

        this.setState({
            editing: true
        })
    }

    handleBlur = () => {

        this.setState({
            editing: false,
            number: this.formatNumber(this.parseNumber(this.state.number))
        })
    }

    handleChange = (e) => {

        this.setState({
            number: e.target.value
        })

        this.props.onChange({
            id: this.props.id,
            value: this.parseNumber(e.target.value)
        })
    }
}