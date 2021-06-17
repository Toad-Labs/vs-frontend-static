const state = [
  {
    senderId: 1,
    senderName: "Jerry",
    senderIcon: "logo.png",
    emails: [
      {
        emailId: 1,
        receivedTime: new Date("May 14, 2021 10:04:00"),
        messageTitle:
          "Your Employment Insurance Claim - You've been subscribed to Job Alerts",
        messageBody: `You are receiving this email because you recently completed an application for Employment Insurance. When you filed your claim, you agreed to be actively looking for work. To help you with your job search, we’ve subscribed you to Job Alerts.

Thank you,

Job Bank`,
      },
      {
        emailId: 2,
        receivedTime: new Date(),
        messageTitle: "New Inbox Message!",
        messageBody: "Lorem Ipsum",
      },
    ],
  },
];

// getters
const getters = {
  getSenderObject(state) {
    //returns first object, which will be the selected sender
    return state[0];
  },
  getEmailsMostRecentFirst() {
    //sorts the
    const sortedMail = state[0].emails.sort((a, b) => {
      if (a.receivedTime > b.receivedTime) {
        return -1;
      }
      if (a.receivedTime < b.receivedTime) {
        return 1;
      }
      return 0;
    });

    return sortedMail;
  },
};

// actions
const actions = {
  //these functions would probably be used by the email service
  sendEmail({ commit }, payload) {
    //adds email to display, nothing else really happens here
    commit("addEmail", payload);
  },
  senderIsSelected({ commit }, selectedSenderId) {
    commit("moveSenderToFirst", selectedSenderId);
  },
};

// mutations
const mutations = {
  addEmail(state, payload) {
    //gets whoever the sender is, based on payload's id
    const sender = state.find((sender) => payload.senderId === sender.senderId);

    //finds the largest emailId amongst the ones that already exist, adds one to it
    const emailId =
      Math.max(...sender.messages.map((email) => email.emailId)) + 1;

    const newEmail = {
      emailId: emailId,
      messageTitle: payload.messageTitle,
      messageBody: payload.messageBody,
      receivedTime: Date.now(),
    };

    sender.push(newEmail);
  },
  moveSenderToFirst(state, selectedSenderId) {
    //if the sender isn't already the first element in state
    if (selectedSenderId !== state[0].senderId) {
      //get the sender
      const sender = state.find(
        (sender) => selectedSenderId === sender.senderId
      );
      //remove the sender where it currently is, then add it to the first place of the state array
      state = state.unshift(state.splice(indexOf(sender), 1)[0]);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
