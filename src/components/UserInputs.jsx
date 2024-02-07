import { useState } from "react";
import UserInput from "./UserInput";

export default function UserInputs({onChange, userInput}) {
  
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            required
            onChange={(event) => onChange("duration", event.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}
