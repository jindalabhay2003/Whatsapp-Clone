// components
//Components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";
import TemplateProvider from "./theme/TemplateProvider";
import UserProvider from "./context/UserProvider";


function App() {
  return (
    <div >
      <TemplateProvider>
        <UserProvider>
      <AccountProvider>
      <Messenger></Messenger>
      </AccountProvider>
      </UserProvider>
      </TemplateProvider>
    </div>
  );
}

export default App;
