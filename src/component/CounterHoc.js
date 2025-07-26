import { useState } from "react";

const CounterHoc = (OldComponent, incrementBy) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    return (
      <div>
        <OldComponent
          {...props}
          count={count}
          incrementCount={() => setCount(count + incrementBy)}
        />
      </div>
    );
  };
};

export default CounterHoc;
