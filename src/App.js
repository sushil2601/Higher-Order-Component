import ButtonClick from "./component/ButtonClick";
import ButtonHover from "./component/ButtonHover";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Higher Order component</h1>
      <ButtonClick />
      <ButtonHover />
    </div>
  );
}
