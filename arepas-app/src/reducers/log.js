const logged = (
  state = {
    id: 0,
    Email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    BirthofDate: "",
    RegisterDate: "",
    Address: "",
    PhoneNumber: "",
    log: false,
  },
  action
) => {
  switch (action.type) {
    case "log":
      return [...state.log, true];

    case "logout":
      return [...state.log, false];

    default:
      return state;
  }
};

export default logged;
