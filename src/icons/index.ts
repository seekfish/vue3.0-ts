import Vue from 'vue'
import SvgIcon from 'components/svgIcon/index.vue'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = (requireContext: any) => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
