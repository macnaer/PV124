import "./App.css";

// Import components
import SideBar from "./contacts/sidebar/sidebar";
import ContactList from "./contacts/contact-list/contact-list";
import React from "react";

class App extends React.Component {
  state = {
    List: [
      {
        id: 1,
        name: "Alexander Verdnam",
        phone: "+1-800-600-9898",
        email: "alex@email.com",
        category: "Friends",
      },
      {
        id: 2,
        name: "Emma Watson",
        phone: "+8-800-321-1234",
        email: "emma@email.com",
        category: "Family",
      },
    ],
  };

  render() {
    const { List } = this.state;
    return (
      <>
        <div className="container bootstrap snippets bootdeys bootdey">
          <div className="row decor-default">
            <SideBar />
            <ContactList List={List} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
