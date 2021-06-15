import { createStore, createLogger } from 'vuex'
import inbox from './modules/inbox'

const debug = process.env.NODE_ENV !== 'production'

export const store = createStore({
  modules: {
    inbox,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});



// import { createStore } from 'vuex';

// // Documentation: https://next.vuex.vuejs.org/guide/state.html
// export const store = createStore({
//     state() {
//         return { 
//             // This is by no means the structure of our state. This is just a placeholder for the time being.
//             messages: {
//                 mail:[{}],
//                 chatbot: [
//                     {isUser: false, text: 'Oh... Well, this is akward.'},
//                     {isUser: true, text: 'I meant I am working too hard; I am all fired up right now.'},
//                     {isUser: false, text: 'I appreciate your concern. Apply water vigorously and call 911.'},
//                     {isUser: true, text: 'I need help! My desk is on fire!'},
//                     {isUser: false, text: 'Hi, how can I help you?'},
//                     {isUser: false, text: 'Oh... Well, this is akward.'},
//                     {isUser: true, text: 'I meant I am working too hard; I am all fired up right now.'},
//                     {isUser: false, text: 'I appreciate your concern. Apply water vigorously and call 911.'},
//                     {isUser: true, text: 'I need help! My desk is on fire!'},
//                     {isUser: false, text: 'Hi, how can I help you?'}
//                 ],
//                 inbox: [{}]
//             }
//         }
//     },
//     mutations: {
//         /* Mutations are used to mutate/change the state.
//          Call the state like this: state.messages */
//          addChatbotMessage(state, payload){
//             const newMessage = {isUser: payload.isUser, text: payload.text};
//             state.messages.chatbot.unshift(newMessage);

//          }
//     },
//     actions: { 
//         async sendMessage(context, payload){
//             // make await api call here with the text
//             context.commit("addChatbotMessage", payload)           

//         }
//         /* Actions are used for async calls like HTTP requests.
//          To use mutators, use context.commit("mutator name", params)
//          We can use axios or fetch. */
//     },
//     getters: {
//         /* Sometimes we may need to compute derived state based on store state,
//          for example filtering through a list of items and counting them. 
//          If more than one component needs to make use of this, 
//          we have to either duplicate the function, 
//          or extract it into a shared helper and import it in multiple places - both are less than ideal. */
//     }
// });