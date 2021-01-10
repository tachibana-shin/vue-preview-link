import Lightbox from "./vue-preview-link.vue"
import "./vue-preview-link.scss"

const LightboxPlugin = {
  install(Vue) {
    Vue.component("vue-preview-link", Lightbox)
  }
}

if (typeof window !== "undefined" && window.Vue) {
  Vue.use(LightboxPlugin)
}

export const VuePreviewLink = Lightbox
export default LightboxPlugin