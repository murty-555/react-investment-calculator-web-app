import { useState } from "react";
import UserInput from "./UserInput";

export default function UserInputs() {
  const [initInvest, setInitInvest] = useState(0);
  const [annInvest, setAnnInvest] = useState(null);
  const [expReturn, setExpReturn] = useState(null);
  const [duration, setDuration] = useState(null);

  function handleInputChangeHandler(e) {
    setInitInvest(e.target.value);
    console.log(initInvest);
  }
  return (
    <div id="user-input">
      <div className="input-group">
        <UserInput
          inputName="initial investment"
          inputValue={initInvest}
        //   onInputChange={() => handleInputChangeHandler}
        />
        <UserInput inputName="annual investment" />
        <UserInput inputName="expected return" />
        <UserInput inputName="duration" />
      </div>
    </div>
  );
}
