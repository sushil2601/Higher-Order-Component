import CounterHoc from "./CounterHoc";

const ButtonHover = (props) => {
  const { count, incrementCount } = props;

  return (
    <div>
      <h2>Count is : {count}</h2>
      <button onMouseOver={incrementCount}>Hover Me</button>
    </div>
  );
};

export default CounterHoc(ButtonHover, 5);
