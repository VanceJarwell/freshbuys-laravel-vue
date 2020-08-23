import Vue from 'vue'
import VueRouter from 'vue-router'
import {store} from './store'
import {router} from './routes'
import { HasError, AlertError } from 'vform'
import VModal from 'vue-js-modal'
import VueReCaptcha from 'vue-recaptcha-v3'
import Notifications from 'vue-notification'
import moment from 'moment'

import App from './../views/ordering/App'

window.eventBus = new Vue()

Vue.config.productionTip = false

Vue.use(VModal, { dialog: true, dynamic: true, injectModalsContainer: true })
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// Filters
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
});


Vue.use(Notifications)
/*
//Vue.use(BootstrapVue)
//Vue.use(SocialSharing)
Vue.use(VueReCaptcha)


*/

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  $(".loader").show()

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = 'Fresh Buys - '+nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

router.afterEach((to, from) => {
  $('body').scrollTop(0)
  $(".loader").hide()
});

const app = new Vue({
    el: '#app',
    components: { 'app': App },
    router,
    store,
    data: {showChangePassword:false},
    mounted(){
        $(".loader").hide()
    }
});

let filter = function(text, length, clamp){
    clamp = clamp || '...';
    var node = document.createElement('div');
    node.innerHTML = text;
    var content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
};


Vue.filter('truncate', filter);