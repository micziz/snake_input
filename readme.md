# sanke_input

Easy one line input just like python!

## Installation

```shell
npm install snake_input
```

## Usage

```js
import input from 'snake_input'

const res = await input('The prompt to the user: ')
```

## Api

### `input(prompt?: string | undefined): Promise<string>`

Promts the user with the prompt provided

Returns a the string as a promise