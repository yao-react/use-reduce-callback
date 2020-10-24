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
    logs, // returned acc
    handleInputChange, // returned handler
  ] = useReduceCallback(
    // arg reduce
    (acc: string[], e: ChangeEvent<HTMLInputElement>) => [
      ...acc,
      e.target.value,
    ],
    [] // arg initAcc
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

- The returned `acc` will be re-initialized if `deps` changes
- The returned `acc` will **not** be re-initialized if `initAcc` changes
- The returned `hander` will change if arg `reduce` changes
