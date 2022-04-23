import { greet } from "./utils/greet";
import axios from 'axios'

function App(): JSX.Element {

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://todolistnobeen.herokuapp.com"
      : "http://localhost:4000";


  return <h1>{greet("World")}</h1>;
}

export default App;
