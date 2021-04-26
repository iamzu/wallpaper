export default {
    mode: 'hash',
    routes: [

        {
            path: '/',
            component: () => import('./components/Layout'),
            meta: {
                title: '首页'
            },
            children: [
                {
                    path: '/home',
                    component: require('./components/Home').default,
                },
                {
                    path: '/about',
                    component: require('./components/About').default
                },
                {
                    path: '/feedback',
                    component: require('./components/Feedback').default
                },
            ]
        },
    ]
}



