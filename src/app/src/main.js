import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import UltimosArticulosComponent from './components/UltimosArticulosComponent.vue'
import BlogComponent from './components/BlogComponent.vue'
import FormularioComponent from './components/FormularioComponent.vue'
import SobreNosotrosComponent from './components/SobreNosotrosComponent.vue'
import SearchComponent from './components/SearchComponent.vue'
import RedirectComponent from './components/RedirectComponent.vue'
import VueMoment from 'vue-moment'
import ArticuloComponent from './components/ArticuloComponent.vue'
import EditarArticuloComponent from './components/EditarArticuloComponent.vue';
import 'moment/locale/es';
import CrearArticuloComponent from './components/CrearArticuloComponent.vue';
import Vuelidate from 'vuelidate';


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuelidate);

const moment = require('moment');

Vue.use(VueMoment,{moment });


const routes = [
{path: '/home', component: UltimosArticulosComponent},
{path: '/ultimos-articulos', component: UltimosArticulosComponent},
{path: '/Blog', component: BlogComponent},
{path: '/search/Blog', component: BlogComponent},
{path: '/contacto', component: FormularioComponent},
{path: '/search/contacto', component: FormularioComponent},
{path: '/sobre-nosotros', component: SobreNosotrosComponent},
{path: '/search/sobre-nosotros', component: SobreNosotrosComponent},
{path: '/', name:'home',component: UltimosArticulosComponent},
{path: '/search/:searchString', component: SearchComponent},
{path: '/redirect/:searchString', component: RedirectComponent},
{path: '/articulo/:id', name:'articulo',component: ArticuloComponent},
{path: '/creararticulo', name:'creararticulo',component: CrearArticuloComponent},
{path: '/articulo/editar/:id', name:'editararticulo',component: EditarArticuloComponent}
];

const router = new VueRouter(
  {
    routes,
    mode: 'history'
  }
)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
