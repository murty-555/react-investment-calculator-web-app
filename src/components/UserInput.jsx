import { useState } from "react";

export default function UserInput({inputName, inputValue, onInputChange}) {
    const [value, setValue] = useState(0)
    function handleChange(e){
        setValue(e.target.value)
    }
    console.log(value)
  return (
    <div>
      <label>{inputName}</label>
      <input type="number" onChange={handleChange} value={value} />
    </div>
  );
}
