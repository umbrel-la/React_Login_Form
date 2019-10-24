import Login from '@c/login';
import Registration from '@c/registration';
import ForgotPass from '@c/forgotPass';
import ConfirmMessage from '@c/confirmMessage';
import MainPage from '@c/mainPage';
import Page404 from '@p/error404';


let routes = [
    {
        name: 'home',
        url: '/',
        component: Login,
        exact: true
    },
    {
        name: 'registration',
        url: '/registration',
        component: Registration,
        exact: true
    },
    {
        name: 'forgotPass',
        url: '/forgotPass',
        component: ForgotPass,
        exact: true
    },
    {
        name: 'confirmMessage',
        url: '/confirmMessage',
        component: ConfirmMessage,
        exact: true
    },
    {
        name: 'mainPage',
        url: '/mainPage',
        component: MainPage,
        exact: true
    },
    {
        url: '**',
        component: Page404
    }
];

let routesMap = {};

routes.forEach((route) => {
    if(route.hasOwnProperty('name')){
        routesMap[route.name] = route.url;
    }
});

let urlBuilder = function(name, params){
    if(!routesMap.hasOwnProperty(name)){
        return null;
    }

    let url = routesMap[name]; // news/:id

    for(let key in params){
        url = url.replace(':' + key, params[key]);
    }

    // отдаем нужный url, который нужно отобразить
    // мы его нашли по имени, которое мы передали в urlBuilder
    return url;
}

export default routes;
export {routesMap, urlBuilder};
