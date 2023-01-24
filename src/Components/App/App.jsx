import './App.scss';
import { City, Header } from "../index";

export const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <City />
      </div>
    </div>
  );
}
