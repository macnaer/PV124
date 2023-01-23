export const UpdatedContactAction = (newList) => {
  return {
    type: "DELETE",
    payload: newList,
  };
};

export const SelectedContactAction = (selectedContact) => {
  return {
    type: "SELECED_CONTACT",
    payload: selectedContact,
  };
};
