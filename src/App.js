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
        avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
        category: "Friends",
      },
      {
        id: 2,
        name: "Emma Watson",
        phone: "+8-800-321-1234",
        email: "emma@email.com",
        avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
        category: "Private",
      },
      {
        id: 3,
        name: "Bill Watson",
        phone: "+8-800-321-1234",
        email: "bill@email.com",
        avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
        category: "Private",
      },
    ],
  };

  onDelete = (id) => {
    console.log(`On delete ${id}`);
  };

  render() {
    const { List } = this.state;
    return (
      <>
        <div className="container bootstrap snippets bootdeys bootdey">
          <div className="row decor-default">
            <SideBar List={List} />
            <ContactList List={List} onDelete={this.onDelete} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
