import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Home from '../components/Home'
import About from '../components/About/About'
import Work from '../components/Work/Work'
import Production from '../components/Production/Production'
import Skill from '../components/Skill/Skill'
import Contact from '../components/Contact/Contact'

Vue.use(Router)

const routes = [{
  path: '/',
  component: Hello
}, {
  path: '/home',
  component: Home,
  children: [
    {path: '', component: About},
    {path: 'work', component: Work},
    {path: 'production', component: Production},
    {path: 'skill', component: Skill},
    {path: 'contact', component: Contact},
  ]
}]

const router = new Router({
  linkActiveClass: 'active',
  routes
})

// router.beforeEach(function (transition) {
//     router.go('/home');
//     transition.next();
//   });
// router.push('info')
export default router