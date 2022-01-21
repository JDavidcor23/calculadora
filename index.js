function App() {
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0);
  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
  };
  const calculate = () => {
    setAnswer(eval(expression));
  };
  const allClear = () => {
    setExpression("");
    setAnswer(0);
  };
  const clear = () => {
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setAnswer(0);
  };
  return (
    <div className="container">
      <div className="grid">
        <div className="dist">
          <input type="text" value={expression} placeholder="0" displayed />
          <div className="total">{answer}</div>
        </div>
        <div onClick={allClear} className="padButtom AC tomato">
          AC
        </div>
        <div onClick={clear} className="padButtom C tomato">
          C
        </div>
        <div onClick={() => display("/")} className="padButtom div">
          /
        </div>
        <div onClick={() => display("*")} className="padButtom times">
          x
        </div>
        <div onClick={() => display("7")} className="padButtom seven dark-grey">
          7
        </div>
        <div onClick={() => display("8")} className="padButtom eight dark-grey">
          8
        </div>
        <div onClick={() => display("9")} className="padButtom nine dark-grey">
          9
        </div>
        <div onClick={() => display("-")} className="padButtom minus">
          -
        </div>
        <div onClick={() => display("4")} className="padButtom four dark-grey">
          4
        </div>
        <div onClick={() => display("5")} className="padButtom five dark-grey">
          5
        </div>
        <div onClick={() => display("6")} className="padButtom six dark-grey">
          6
        </div>
        <div onClick={() => display("+")} className="padButtom plus">
          +
        </div>
        <div onClick={() => display("1")} className="padButtom one dark-grey">
          1
        </div>
        <div onClick={() => display("2")} className="padButtom two dark-grey">
          2
        </div>
        <div onClick={() => display("3")} className="padButtom three dark-grey">
          3
        </div>
        <div onClick={calculate} className="padButtom equal blue">
          =
        </div>
        <div onClick={() => display("0")} className="padButtom zero dark-grey">
          0
        </div>
        <div onClick={() => display(".")} className="padButtom dot dark-grey">
          .
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
