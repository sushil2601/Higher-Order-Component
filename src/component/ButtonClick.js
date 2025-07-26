import CounterHoc from "./CounterHoc";

const ButtonClick = (props) => {
  const { count, incrementCount } = props;

  return (
    <div>
      <h2>Count is : {count}</h2>
      <button onClick={incrementCount}>Click Me</button>
    </div>
  );
};

export default CounterHoc(ButtonClick, 10);
