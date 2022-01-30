//https://www.thisdot.co/blog/creating-a-global-state-with-react-hooks

export const reducer = (state, action) => {
    switch (action.type) {
      case "nightmare_switch":
        return {
          ...state,
          //active: !state.active,
          theme: "nightmare"
        }
  
      default:
        return state
    }
  }
  
  export const initialState = {
    //active: false,
    theme: "normal"
  }