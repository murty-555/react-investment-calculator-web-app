import { calculateInvestmentResults, formatter } from "../utils/investment";

export default function Result({ input }) {
  const resultArr = calculateInvestmentResults(input);

  const initialInvestment =
    resultArr[0].valueEndOfYear -
    resultArr[0].interest -
    resultArr[0].annualInvestment;

  console.log(resultArr);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultArr.map((data) => {
          const totalInterest =
            data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
          const totalAmountInvested = data.valueEndOfYear - totalInterest

          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>${formatter.format(data.valueEndOfYear)}</td>
              <td>${formatter.format(data.interest)}</td>
              <td>${formatter.format(totalInterest)}</td>
              <td>${formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
