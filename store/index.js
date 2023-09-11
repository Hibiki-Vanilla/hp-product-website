import Vue from 'vue'
import Vuex from 'vuex'
import { Message } from 'element-ui'

Vue.use(Vuex)

const state = () => ({
  isPc: false,
  navList: [],
  gooleGRecaptcha: '',
  recaptData: {},
  callBackFlag: false,
  contactFalg: false,
})

const mutations = {
  SET_IS_PC(state, data) {
    state.isPc = data
  },
  SET_NAV_LIST(state, data) {
    state.navList = data
  },
  SET_GOOLE_RECAPT(state, data) {
    state.gooleGRecaptcha = data
  },
  SET_RECAPT_DATA(state, data) {
    state.recaptData = data
  },
  SET_CALLBACK_FLAG(state, data) {
    state.callBackFlag = data
  },
  SET_CONTACT_FLAG(state, data) {
    state.contactFalg = data
  },
}

const actions = {
  gooleCallBack({ state, commit }, uwell) {
    const { recaptData } = state
    const key = recaptData.isContact ? 'SET_CONTACT_FLAG' : 'SET_CALLBACK_FLAG'
    uwell.$axios
      .post(recaptData.url, recaptData.params, { params: { gRecaptchaToken: uwell.token } })
      .then((res) => {
        if (res.code === 1) {
          Message.success(recaptData.messKey.success)
        } else {
          Message.error(recaptData.messKey.error)
        }

        commit(key, true)
        window.grecaptcha.reset(state.gooleGRecaptcha)
      })
      .catch(() => {
        commit(key, true)
        window.grecaptcha.reset(state.gooleGRecaptcha)
      })
  },
}

export default {
  nameSpace: true,
  state,
  mutations,
  actions,
}
