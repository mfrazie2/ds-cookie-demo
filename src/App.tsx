import "./App.css";
import { setCookie, clearCookies } from "./utils/cookies";

function App() {
  function clearAllCookies() {
    clearCookies("token")();
    clearCookies("username")();
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => setCookie("token")("this is the token")}>
          Set token cookie
        </button>
        <button onClick={() => setCookie("username")("this is the username")}>
          Set username cookie
        </button>
      </div>

      <div>
        <button
          onClick={() => setCookie("token")("this is the x-domain token", true)}
        >
          Set token cookie as x-domain
        </button>
        <button
          onClick={() =>
            setCookie("username")("this is the x-domain username", true)
          }
        >
          Set username cookie as x-domain
        </button>
      </div>

      <button onClick={clearAllCookies}>Clear all cookies</button>
    </div>
  );
}

export default App;
