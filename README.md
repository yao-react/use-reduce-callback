# @yao-react/use-reduce-callback

React hook to reduce callback invocations.

## Installation

```
npm install @yao-react/use-reduce-callback
```

```
yarn add @yao-react/use-reduce-callback
```

## Getting started

```tsx
export const Demo = () => {
  const [
    logs, // output acc
    handleInputChange, // output handler
  ] = useReduceCallback(
    // input reduce
    (acc: string[], e: ChangeEvent<HTMLInputElement>) => [
      ...acc,
      e.target.value,
    ],
    [] // input initAcc
  );
  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      {logs.map(log => (
        <p>{log}</p>
      ))}
    </div>
  );
};
```

## API

Inputs:

| name    | type                  | required | description |
| ------- | --------------------- | -------- | ----------- |
| reduce  | (acc, ...args) => acc | true     |             |
| initAcc | any                   | true     |             |
| deps    | any[]                 | false    |             |

Outputs

| name    | type              | description |
| ------- | ----------------- | ----------- |
| acc     | any               |             |
| handler | (...args) => void |             |

## More words

- The output `acc` will refresh if `deps` changes
- The output `acc` will **not** refresh `initAcc` changes
- The output `hander` will refresh if arg `reduce` changes
