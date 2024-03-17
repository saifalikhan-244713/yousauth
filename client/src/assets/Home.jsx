import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <div>Home</div>
      {isAuthenticated ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
        
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}

      {isAuthenticated?
      <div>yes authtenticated ready to logout</div>:
      <div>ready to login</div>
    }
    </>
  );
}
