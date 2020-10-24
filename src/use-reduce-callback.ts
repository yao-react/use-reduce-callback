import { useCallback, useEffect, useState } from 'react';

export function useReduceCallback<AS extends any[], A>(
  reduce: (acc: A, ...args: AS) => A,
  initAcc: A,
  deps: any[] = []
): [A, (...args: AS) => void] {
  const [acc, setAcc] = useState(initAcc);

  const handler = useCallback(
    (...args: AS) => {
      setAcc(acc => reduce(acc, ...args));
    },
    [setAcc, reduce]
  );

  useEffect(() => {
    setAcc(initAcc);
  }, [setAcc, ...deps]);

  return [acc, handler];
}
