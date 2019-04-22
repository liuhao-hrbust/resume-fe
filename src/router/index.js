import Vue from 'vue';
import Store from '../vuex/store/index';
import Router from 'vue-router';
import pageDefault from '@/components/resume/pageDefault';
import pageSecond from '@/components/resume/pageSecond';
import pageThird from '@/components/resume/pageThird';
import SkrollrContainer from '@/components/homePage/SkrollrContainer';
import Member from '@/components/member/index';
import ModelList from '@/components/model_list/index';
import editResume from '@/components/editResume/editResume';
// import { Store } from '_vuex@3.1.0@vuex';
// import Modal from '@/components/modal/index';

Vue.use(Router);

const vueRouter = new Router({
    routes: [
        {
            path: '/',
            component: SkrollrContainer
        },
        {
            path: '/edit',
            component: editResume,
            children: [
                {
                    path: 'two',
                    component: pageSecond
                },
                {
                    path: 'three',
                    component: pageThird
                },
                {
                    path: 'one',
                    component: pageDefault
                }
            ]
        },
        {
            path: '/member',
            component: Member
        },
        {
            path: '/models',
            component: ModelList
        }
    ]
});

vueRouter.beforeEach(function(to, from, next) {
    Store.commit('TOGGLE_SHOW_MODAL', false);
    Store.commit('TOGGLE_ISLOGIN', !!window.localStorage.user_name);
    const nextRoute = ['edit', 'member'];
    if (nextRoute.indexOf(to.name) >= 0) {
        // 未登录
        if (!window.localStorage.user_name) {
            Store.commit('TOGGLE_SHOW_MODAL', true);
            Store.commit('TOGGLE_SHOW_REGISTER', true);
        }
    } else {
        next();
    }
});

export default vueRouter;
