const addMess = "ADD-MESS";
const updateNewMess = "UPDATE-NEW-MESS-TEXT";
let inisialState = {
    dialogsData: [
        {id: 1, name: "Nastya"},
        {id: 2, name: "Businka"},
        {id: 3, name: "Cotenochek"},
        {id: 4, name: "kabachok"},
        {id: 5, name: "bulocha"},
        {id: 6, name: "youpp"},
    ],
    messagesData: [
        {id: 1, message: "hello"},
        {id: 2, message: "yhehe"},
        {id: 3, message: "love"},
        {id: 4, message: "bob"},
        {id: 5, message: "himre"},
        {id: 6, message: "memes"},


    ],
    newMessageText: "",
}
const dialogsReducer = (state = inisialState, action) => {
    switch (action.type) {
        case addMess:
            let newMess = {id: 1, message: state.newMessageText,};
            state.messagesData.push(newMess);
            state.newMessageText = "";
            return state;
        case updateNewMess:
            state.newMessageText = action.newMess;
            return state;
        default:
            return state;
    }


};


export const addMessing = () => ({type: addMess});
export const updateNewMessText = (text) => ({type: updateNewMess, newMess: text});

export default dialogsReducer;