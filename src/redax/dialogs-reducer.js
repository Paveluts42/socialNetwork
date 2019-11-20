const addMess = "ADD-MESS";

let inisialState = {
  dialogsData: [
    { id: 1, name: "Nastya" },
    { id: 2, name: "Businka" },
    { id: 3, name: "Cotenochek" },
    { id: 4, name: "kabachok" },
    { id: 5, name: "bulocha" },
    { id: 6, name: "youpp" }
  ],
  messagesData: [
    { id: 1, message: "hello" },
    { id: 2, message: "yhehe" },
    { id: 3, message: "love" },
    { id: 4, message: "bob" },
    { id: 5, message: "himre" },
    { id: 6, message: "memes" }
  ]
};
let idAdd = 7;
const dialogsReducer = (state = inisialState, action) => {
  switch (action.type) {
    case addMess:
      idAdd++;
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: idAdd, message: action.newMessageBody }
        ]
      };

    default:
      return state;
  }
};

export const addMessing = (newMessageBody) => ({ type: addMess, newMessageBody });


export default dialogsReducer;
