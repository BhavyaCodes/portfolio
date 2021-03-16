import { useState, useEffect, Dispatch, SetStateAction } from "react";

function useLocalStorage(
  key: string,
  initialVal: boolean
): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [state, setState] = useState<boolean>(initialVal);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setState(JSON.parse(stickyValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
