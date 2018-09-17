import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './lang/zh'
import en from './lang/en'
import tw from './lang/tw'

Vue.use(VueI18n)

const messages = {
  zh,
  en,
  tw
}

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zh',
  messages
})

export default i18n
