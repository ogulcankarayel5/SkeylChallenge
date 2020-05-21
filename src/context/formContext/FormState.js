import React, { useReducer } from "react";
import FormContext from "./FormContext";
import formReducer from "./FormReducer";
import { formConstants } from "../../constants";
const FormState = (props) => {
  const initialState = {
    loading: false,
    jsonData: null,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const getValueFromJson = (json, value) => {
    
    try {
      dispatch({
        type: formConstants.SUBMIT_REQUEST,
      });

      //önce inputtan gelen değeri '.' ya göre ayırıp döngüye sokuyoruz. Her döngüde json değeri bir aşağıdaki ifadeye kayıyor
      //components.schemes gibi bir yapıda ilk önce json objesi,components oluyor ondan sonra schemes 
      value.split(".").forEach((token) => {
        console.log(json)
        if (json) json = json[token];
      });
      

      dispatch({
        type: formConstants.SUBMIT_SUCCESS,
        payload: json,
      });
    } catch (error) {

      dispatch({
        type:formConstants.SUBMIT_FAILURE,
        payload:error
      })
    }
  };

  return (
    <FormContext.Provider
      value={{
        jsonData: state.jsonData,
        loading:state.loading,
        getValueFromJson: getValueFromJson,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
