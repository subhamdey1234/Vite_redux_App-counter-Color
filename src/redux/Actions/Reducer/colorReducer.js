const initval='red'

function colorReducer(state=initval,action) {
    switch (action.type) {
          case "black":
               return "#000";
            break;
          case "green":
            return "#0f0";
            break;
          case "gray":
            return "gray";
            break;
          case "blue":
            return "blue"       
            break;
       
            default:
            return state;
            break;
    }
}
export default colorReducer;