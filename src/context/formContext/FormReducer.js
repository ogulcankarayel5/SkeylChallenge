import { formConstants } from "../../constants";
  
  export default (state, action) => {
    switch (action.type) {
    
      case formConstants.SUBMIT_REQUEST:
        return {
          ...state,
          loading:true,
        }
      case formConstants.SUBMIT_SUCCESS:
        return{
          ...state,
          loading:false,
          jsonData:JSON.stringify(action.payload,null,2)
        }
  
      default:
        return state;
    }
  };
  