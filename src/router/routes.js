const routes = [
    {
        path: '/',
        component: () => import('@/views/appMainPage'),
        name: 'Mainpage',
    },
    {
        path: '/beauty',
        component: () => import('@/views/appProgramPage'),
        name: 'beauty',
        props: true,
    },
    {
        path: '/magazine',
        component: () => import('@/layouts/magazineProgram'),
        name: 'magazine',
        props: true,
    },
    {
        path: '/child',
        component: () => import('@/layouts/childProgram'),
        name: 'child',
        props: true,
    },
    {
        path: '/caffe',
        component: () => import('@/layouts/caffeProgram'),
        name: 'caffe',
        props: true,
    },
    {
        path: '/:success',
        component: () => import('@/views/appMainPage'),
        name: 'SuccessPay',
        props: {'success': true}
    },
]



export default routes
