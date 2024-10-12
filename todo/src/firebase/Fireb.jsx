import { useState } from "react";
import { auth } from "./Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Crud from "./Crud";
function Fireb() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert(err)
    }
  };
  return (
    <div>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn} >Sign in </button>
      <h4 className="text-3xl">jlkfjfdksaj</h4>
      <Crud/>
    </div>
  );
}

export default Fireb;
