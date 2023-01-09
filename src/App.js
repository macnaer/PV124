import "./App.css";

// Import components
import SideBar from "./contacts/sidebar/sidebar";
import ContactList from "./contacts/contact-list/contact-list";

function App() {
  return (
    <>
      <div className="container bootstrap snippets bootdeys bootdey">
        <div className="row decor-default">
          <SideBar />
          <ContactList />
        </div>
      </div>
    </>
  );
}

export default App;
