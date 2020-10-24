import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import { Meta } from '@storybook/react';
import { useReduceCallback } from '../src';

const meta: Meta = {
  title: 'use-reduce-callback',
};

export default meta;

export const UseReduceCallback = () => {
  const [dep, setDep] = useState(0);
  const [logs, handleInputChange] = useReduceCallback(
    (acc: string[], e: ChangeEvent<HTMLInputElement>) => [
      ...acc,
      e.target.value,
    ],
    [],
    [dep]
  );
  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <span> </span>
      <button onClick={() => setDep(x => x + 1)}>change dep</button>
      {logs.map((log, index) => (
        <p key={index} style={{ border: 'solid 1px black', minHeight: '1em' }}>
          {log}
        </p>
      ))}
    </div>
  );
};
