// import { useState, useEffect, Dispatch, SetStateAction } from "react";

// function useLocalStorage(
//   key: string,
//   initialVal: boolean
// ): [boolean, Dispatch<SetStateAction<boolean>>] {
//   const [state, setState] = useState<boolean>(() => {
//     try {
//       if (window.localStorage.getItem(key) === "true") {
//         return true;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.log(error);
//     }

//     // window.localStorage.setItem(key, initialVal.toString());

//     return initialVal;
//   });

//   useEffect(() => {
//     if (state) {
//       try {
//         window.localStorage.setItem(key, state.toString());
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }, [state, key]);

//   return [state, setState];
// }

// export default useLocalStorage;
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
