import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result.data); // Log the response
        if (result.data === "success") {
          navigate("/home"); // Redirect to home page after successful login
        }
      })
      .catch((err) => console.error(err)); // Log any errors
  };
  return (
    <>
      <div className="container"></div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            <strong>email/username</strong>
          </label>
          <br />
          <input
            type="email"
            placeholder="Enter email"
            autoComplete="off"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="password">
            <strong>password/username</strong>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Name"
            autoComplete="off"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit" onClick={() => loginWithRedirect()}>Login</button>
        <br /> <br />
        <p>dont have an account</p>
        <Link to="/register">Signup</Link>
      </form>
    </>
  );
}
// import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// export default function Login() {
//   const { loginWithRedirect } = useAuth0();

//   return (
//     <>
//       <div className="container"></div>
//       <h1>Login</h1>

//       <button onClick={() => loginWithRedirect()}>Login</button>

//       <br /> <br />
//       <p>Dont have an account</p>
//       <Link to="/register">Signup</Link>
//     </>
//   );
// }