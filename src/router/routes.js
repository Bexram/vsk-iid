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
    },
    {
        path: '/magazine',
        component: () => import('@/layouts/magazineProgram'),
        name: 'magazine',
    },
    {
        path: '/child',
        component: () => import('@/layouts/childProgram'),
        name: 'child',
    },
    {
        path: '/caffe',
        component: () => import('@/layouts/caffeProgram'),
        name: 'caffe',
    },
]



export default routes
