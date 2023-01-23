import "./App.css";
import { v4 as uuidv4 } from "uuid";

// Import components
import SideBar from "./components/sidebar/sidebar";
import ContactList from "./components/contact-list/contact-list";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import AddContact from "./components/addContact/addContact";
import NotFound from "./components/notFound/notFound";
import EditContact from "./components/editContact/editContact";

import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container bootstrap snippets bootdeys bootdey">
        <div className="row decor-default">
          <SideBar />
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="contacts-list">
              <Header />
              <Routes>
                <Route path="/" element={<ContactList />} />
                <Route path="/add-contact" element={<AddContact />} />
                <Route path="/edit-contact" element={<EditContact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
