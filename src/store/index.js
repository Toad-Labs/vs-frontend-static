import { createStore, createLogger } from "vuex";
import chatMessages from "./modules/chatMessages";
import emails from "./modules/emails";
import inbox from "./modules/inbox";

const debug = process.env.NODE_ENV !== "production";

export const store = createStore({
  modules: {
    chatMessages,
    emails,
    inbox,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
