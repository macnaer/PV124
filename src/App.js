import "./App.css";
import { v4 as uuidv4 } from "uuid";

// Import components
import SideBar from "./contacts/sidebar/sidebar";
import ContactList from "./contacts/contact-list/contact-list";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { slice } from "lodash";
import Header from "./contacts/header/header";
import AddContact from "./contacts/addContact/addContact";
import NotFound from "./contacts/notFound/notFound";

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
        avatar: 16,
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

  render() {
    const { List } = this.state;
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
                  element={<ContactList List={List} onDelete={this.onDelete} />}
                />
                <Route
                  path="/add-contact"
                  element={
                    <AddContact onAddNewContact={this.onAddNewContact} />
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
