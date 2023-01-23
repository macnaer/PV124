import { v4 as uuidv4 } from "uuid";

const initialState = {
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

const ContactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        List: action.payload,
      };

    case "SELECED_CONTACT":
      return {
        ...state,
        selectedContact: action.payload,
      };
    default:
      return state;
  }
};

export default ContactListReducer;
