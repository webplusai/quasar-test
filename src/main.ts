import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { Notify, Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/fontawesome-v6'
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import 'quasar/src/css/index.sass'

createApp(App)
    .use(router)
    .use(store)
    .use(Quasar, {
        iconSet: quasarIconSet,
        plugins: {
            Notify,
        },
        config: {
            notify: {},
        },
    })
    .mount('#app')
