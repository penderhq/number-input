# NumberInput

[![npm package][npm-badge]][npm]

Used for entering numbers.

## Getting started

````
npm install @cmds/number-input --save
````

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String |  | Unique identifier for the field |
| className | String |  | Add a className to the input |
| value | String | | Number to be edited |
| allowNegative | Boolean |  | Prevents the user from entering a negative number. Default: `false` |
| format | Format |  | `decimal` or `integer`. Default: `integer` |
| precision | Boolean |  | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`. Default: `2` |
| onChange | Function |  | Triggers when the value changes: `({id: string, value: string})` |

### Date Formatting

For date formats go to [https://momentjs.com](https://momentjs.com)

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/number-input.svg
[npm]: https://www.npmjs.org/package/@cmds/number-input
