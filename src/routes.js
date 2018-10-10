import galerija from './components/galerija.vue'
import info from './components/info.vue'
import home from './components/home.vue'

export default[
    { path : '/galerija', component: galerija},
    { path : '/info', component: info},
    { path : '/', component: home}
]
