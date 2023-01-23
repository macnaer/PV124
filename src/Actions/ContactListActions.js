export const UpdatedContactAction = (newList) => {
  return {
    type: "UPDATE",
    payload: newList,
  };
};

export const SelectedContactAction = (selectedContact) => {
  return {
    type: "SELECED_CONTACT",
    payload: selectedContact,
  };
};
