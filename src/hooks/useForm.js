import React, { useState, useEffect } from "react";

export const useForm = (initialState,submit) => {
  const [values, setValues] = useState(initialState);

  //form tarafındaki callback fonksiyonu çağırmak için true olması gerekir
  const [isSubmitting,setSubmitting]=useState(false);

  useEffect(() => {
      console.log(isSubmitting)
        if(isSubmitting){
            submit();
        }

  }, [isSubmitting]);

  const handleChange = (e) => {
   


    setValues({
        ...values,
        [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = (e) =>{

    e.preventDefault()
    setSubmitting(true)
  }

  const clearForm = () => {
    setValues(initialState);
    setSubmitting(false)
  }
  return {values, handleChange,handleSubmit,clearForm}
};
