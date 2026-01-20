import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Secret from "./pages/Secret";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("accessToken")
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);
  
  const handleLogin = (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    setToken(accessToken);
  };

  const handleLogout = () => {
  localStorage.removeItem("accessToken");
  setToken(null);
};

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Fullstack Docker App</h1>

      {!token ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Secret token={token} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;