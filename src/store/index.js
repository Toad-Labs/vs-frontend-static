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