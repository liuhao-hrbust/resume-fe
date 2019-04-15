import Vue from 'vue';
import Router from 'vue-router';
import pageDefault from '@/components/resume/pageDefault';
import pageSecond from '@/components/resume/pageSecond';
import pageThird from '@/components/resume/pageThird';
import SkrollrContainer from '@/components/homePage/SkrollrContainer';
import Member from '@/components/member/index';
import ModelList from '@/components/model_list/index';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: SkrollrContainer
        },
        {
            path: '/edit',
            component: pageDefault
        },
        {
            path: '/edit/two',
            component: pageSecond
        },
        {
            path: '/eidt/three',
            component: pageThird
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
