import Layout from './Layout.vue'
import './index.css'

export default {
  Layout,
  NotFound: () => Layout,
  enhanceApp({ _app, _router, siteData }) {
    console.info('enhanceApp()', siteData)
    siteData.title = 'Oden | Pulmad'
    siteData.value.description = 'Johanna & Kristjani pulmapidu 🎉'
    return siteData
  },
}
