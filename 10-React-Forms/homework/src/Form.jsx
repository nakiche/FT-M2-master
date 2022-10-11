import React, { useState } from 'react';

export function validate(input) {
  //console.log(input);
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
    
  } 
  else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

   if (!input.password) { //valido en paralelo colocando if no "else if"
    errors.password = 'Password is required';
  }
  else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  
  return errors;
};


export default function  Form() {
  const [input, setInput] = useState({ //es un objeto
    username: '',
    password: ''
  });

   const [errors, setErrors] = useState({});

  function handleInputChange(e) {
    setInput({
      ...input, //spread oper.. copia lo que tiene actualmente y lo pisa
      [e.target.name]: e.target.value,
    });

    setErrors(validate({
       ...input,
       [e.target.name]: e.target.value
     }))
  }

  

  return (
    <form >
      <div>
        <label>Username:</label>
        <input className={errors.username && 'danger'} type="text" name="username" value={input.username} onChange={handleInputChange}  />
        <p className="danger">{errors.username}</p>  
      </div>
      <div>
        <label>Password:</label>
        <input className={errors.password && 'danger'} type="password" name="password" value={input.password} onChange={handleInputChange}  />
        <p className="danger">{errors.password}</p>  
      </div>  
      <div>
        <input disabled= "{errors.username || errors.password ? true : false}"type="submit" />
      </div>
      
      ...
    </form>
  )
}
