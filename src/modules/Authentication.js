import store from '../state/store/configureStore'
import JtockAuth from 'j-tockauth'

const auth = new JtockAuth({
  host: 'https://flex-coast-development.herokuapp.com',
  prefixUrl: '/api',
  debug: false,
})

const Authentication = {
  async signIn(data) {
    try {
      let response = await auth.signIn(data.email.value, data.password.value)
      store.dispatch({
        type: 'AUTHENTICATE',
        payload: response.data.name,
      })
    } catch (e) {
      console.log('somethings fishy here')
    }
  },
}

export default Authentication