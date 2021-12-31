import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen :false, //ths is to compose email
    selectedMessage:null,   //this is to send data from email tab to opned email
  },

  reducers: {
    openSendMessage : (state) => {  //actions
      state.sendMessageIsOpen =true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen =false
    },
    openMessage: (state,action) => { //this sends data to sho email data
      state.selectedMessage =action.payload
    },
  },

});

export const { openSendMessage, closeSendMessage, openMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const selectedMail = (state) => state.mail.selectedMessage;


export default mailSlice.reducer;
