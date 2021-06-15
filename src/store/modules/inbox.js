// Don't mind this import. I will use it in my next PR.
// import InboxService from '../../services/inbox/inbox';

const state = {
  inbox: [
        {isUser: false, text: 'Oh... Well, this is akward.'},
        {isUser: true, text: 'I meant I am working too hard; I am all fired up right now.'},
        {isUser: false, text: 'I appreciate your concern. Apply water vigorously and call 911.'},
        {isUser: true, text: 'I need help! My desk is on fire!'},
        {isUser: false, text: 'Hi, how can I help you?'},
        {isUser: false, text: 'Oh... Well, this is akward.'},
        {isUser: true, text: 'I meant I am working too hard; I am all fired up right now.'},
        {isUser: false, text: 'I appreciate your concern. Apply water vigorously and call 911.'},
        {isUser: true, text: 'I need help! My desk is on fire!'},
        {isUser: false, text: 'Hi, how can I help you?'}]
}

// getters
const getters = {

    // Get all inbox items
  getInbox (state) {
    return state.inbox;
  }

}

// actions
const actions = {

// Don't mind this commented section. It will be used with the InboxService.

//   initializeInbox ({ dispatch }) {

//     dispatch('fetchInbox');

//   },

//   // Fetch and load the categories
//   fetchInbox ({ commit, state, getters }) {

//      // Get all of the Product Categories from the API
//      InboxService
//      .getAll()
//      .then((inbox) => {

//       commit('setInbox', inbox);

//     //   commit('setLoadedState', true);

//      });

//   },


  async sendMessage(context, payload){
    // make await api call here with the text
    context.commit("addChatbotMessage", payload)           
  },

}

// mutations
const mutations = {

  setInbox (state,  inbox) {
    state.inbox = inbox;
  },

  addChatbotMessage(state, payload){
    const newMessage = {isUser: payload.isUser, text: payload.text};
    state.inbox.unshift(newMessage);

 }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}