import "./App.css";
import { v4 as uuidv4 } from "uuid";

// Import components
import SideBar from "./components/sidebar/sidebar";
import ContactList from "./components/contact-list/contact-list";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { slice } from "lodash";
import Header from "./components/header/header";
import AddContact from "./components/addContact/addContact";
import NotFound from "./components/notFound/notFound";
import EditContact from "./components/editContact/editContact";

class App extends React.Component {
  state = {
    List: [
      {
        id: uuidv4(),
        name: "Alexander Verdnam",
        phone: "+1-800-600-9898",
        email: "alex@email.com",
        avatar: 34,
        gender: "men",
        category: "Friends",
      },
      {
        id: uuidv4(),
        name: "Emma Watson",
        phone: "+8-800-321-1234",
        email: "emma@email.com",
        avatar: 17,
        gender: "women",
        category: "Private",
      },
      {
        id: uuidv4(),
        name: "Bill Watson",
        phone: "+8-800-321-1234",
        email: "bill@email.com",
        avatar: 25,
        gender: "men",
        category: "Private",
      },
    ],
    selectedContact: null,
  };

  onDelete = (id) => {
    const { List } = this.state;
    const index = List.findIndex((el) => el.id === id);
    let tmpList = slice(List);
    const tmpListPart1 = tmpList.slice(0, index);
    const tmpListPart2 = tmpList.slice(index + 1);
    tmpList = [...tmpListPart1, ...tmpListPart2];

    this.setState({
      List: tmpList,
    });
  };

  onAddNewContact = (newContact) => {
    const { List } = this.state;
    let tmpList = List.slice();
    tmpList.unshift(newContact);

    this.setState({
      List: tmpList,
    });
  };

  onSelectContact = (id) => {
    const { List } = this.state;
    const index = List.findIndex((el) => el.id === id);
    const currentContact = List[index];
    this.setState({
      selectedContact: currentContact,
    });
  };

  onEditContact = (updatedContact) => {
    const { List } = this.state;
    const index = List.findIndex((el) => el.id === updatedContact.id);
    const tmpList = List.slice();
    tmpList[index] = updatedContact;
    this.setState({
      List: tmpList,
    });
  };

  render() {
    const { List, selectedContact } = this.state;
    return (
      <div className="container bootstrap snippets bootdeys bootdey">
        <div className="row decor-default">
          <SideBar List={List} />
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="contacts-list">
              <Header />
              <Routes>
                <Route
                  path="/"
                  element={
                    <ContactList
                      List={List}
                      onSelectContact={this.onSelectContact}
                      onDelete={this.onDelete}
                    />
                  }
                />
                <Route
                  path="/add-contact"
                  element={
                    <AddContact onAddNewContact={this.onAddNewContact} />
                  }
                />
                <Route
                  path="/edit-contact"
                  element={
                    <EditContact
                      onEditContact={this.onEditContact}
                      selectedContact={selectedContact}
                    />
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
