const state = [ {
    senderId: 1,
    senderName: "Jerry",
    senderIcon: "logo.png",
    emails: [{
        emailId: 1,
        receivedTime: Date.now(),
        messageTitle: "New Inbox Message!", 
        messageBody: "Lorem Ipsum"
    }]
    
},]
  
  // getters
  const getters = {
  
  }
  
  // actions
  const actions = {
  
  }
  
  // mutations
  const mutations = {
  
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }