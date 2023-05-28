
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";
function App() {
  const clientId='716385025461-45psegc91h9e9jvbnufp4vibc9ifetf6.apps.googleusercontent.com'
  return (

    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>  
    </GoogleOAuthProvider>
  );
}

export default App;
