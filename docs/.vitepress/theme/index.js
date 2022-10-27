import DefaultTheme from 'vitepress/theme'
import ComponentInHeader from '../../components/ComponentInHeader.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ComponentInHeader', ComponentInHeader)
  }
}
