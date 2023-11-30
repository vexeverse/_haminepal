import { createContext } from "react";

const Context = createContext<any>({});

const initial = {
  label: "",
  show: false,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "INIT":
      return {
        label: <></>,
        show: false,
      };
    case "TOGGLE_NAV": {
      return {
        ...state,
        show: !state.show,
      };
    }

    case "UPDATE_LABEL": {
      return {
        ...state,
        label: action.value,
      };
    }
    default:
      return {
        ...state,
      };
  }
}

const ContextNavProps = { Context, reducer, initial };

export default ContextNavProps;
