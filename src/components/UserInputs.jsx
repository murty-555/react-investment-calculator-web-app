import { useState } from "react";
import UserInput from "./UserInput";

export default function UserInputs({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            required
            name="initialInvestment"
            onChange={(event) =>
              onChange([event.target.name], event.target.value)
            }
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            required
            name="annualInvestment"
            onChange={(event) =>
              onChange([event.target.name], event.target.value)
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
            name="expectedReturn"
            onChange={(event) =>
              onChange([event.target.name], event.target.value)
            }
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            required
            name="duration"
            onChange={(event) =>
              onChange([event.target.name], event.target.value)
            }
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}
