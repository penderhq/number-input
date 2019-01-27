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

    render() {

        const {number} = this.state

        return (
            <input
                data-context-id={this.props.contextId}
                data-role-id={this.props.roleId}
                type="text"
                className={cx(
                    css`
                        background: none;
                        border: none;
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