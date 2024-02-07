

export default function Result({resultArr}) {
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
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>${data.investmentValue}</td>
              <td>${data.interest}</td>
              <td>${data.totalInterest}</td>
              <td>${data.investedCapital}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
