import { useEffect, useState } from "react";
import { getSecret } from "../services/api";

function Secret({ token, onLogout }) {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    getSecret(token)
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch(() => {
        onLogout();
      });
  }, [token]);

  return (
    <div>
      <h2>Protected Page</h2>
      <p>{message}</p>
    </div>
  );
}

export default Secret;