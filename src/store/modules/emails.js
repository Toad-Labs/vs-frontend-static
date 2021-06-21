const state = {
  selectedSenderId: 1,
  mailObject: [
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
  ],
};

// getters
const getters = {
  getMailObject(state) {
    //emails will be set within state from emails service
    return state.mailObject;
  },
  getSelectedSenderObject(state, getters) {
    //finds the emails attached to the selected sender's ID
    return getters.getMailObject.find(
      (sender) => sender.senderId === state.selectedSenderId
    );
  },
  //returns all the emails, with most recent ones first
  getEmailsOrderByDateAsc(state, getters) {
    //get list of emails
    const mail = getters.getSelectedSenderObject.emails;
    //sorts a copy of the list of mail (getters should not mutate state)
    const sortedMail = [...mail].sort((a, b) => {
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
    commit("selectSender", selectedSenderId);
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
  selectSender(state, payload) {
    state.selectedSenderId = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
