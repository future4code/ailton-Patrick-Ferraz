import React, { useState } from 'react'

export default function useForm(initialState) {
const [form,setForm] = useState(initialState);

const onChange = (e) =>{
    const {name,value} = e.target;
    setForm({...form, [name]: value});
};

return {form,setForm,onChange} 
   
  
}
