import UserComp from './Components/User.vue';
import AboutComp from './Components/About/About_us.vue';
import HomeComp from './Components/Home.vue';
import AboutContentComp from './Components/About/About-content';

export const routes = [
  {
    path: '/user',
    component: UserComp,
    children:[
      {
        path: ':id',
        component: UserComp,
        name: 'userProfile'
      },
    ],
    beforeEnter: (to,from,next) => {
      next();
    },
  },
  {
    path: '/about_us',
    component: AboutComp,
    children: [
      {
        path: 'show',
        component: AboutContentComp
      }
    ]
  },
  { path: '/',
    component: HomeComp,
    name: 'home'
  },
  { path: '*',
    component: HomeComp,
  },
]
