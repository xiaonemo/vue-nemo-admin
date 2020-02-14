import Mock from 'mockjs'
 
const data = {
            collapse: false,
            items: [
                {
                    icon: 'el-icon-lx-home',
                    index: 'dashboard',
                    title: 'Dashboard',
                    url: '/dashboard'
                },
                {
                    icon: 'el-icon-tickets',
                    index: 'table',
                    title: '基础表格',
                    url: '/table'
                },
                {
                    icon: 'el-icon-document-copy',
                    index: 'tabs',
                    title: 'tab选项卡',
                    url: '/tabs'
                },
                {
                    icon: 'el-icon-lx-calendar',
                    index: '3',
                    title: '表单相关',
                    subs: [
                        {
                            index: 'form',
                            title: '基本表单',
                            url: '/form'
                        },
                        {
                            index: 'upload',
                            title: '文件上传',
                            url: '/upload'
                        },
                        {
                            index: 'editor',
                            title: '富文本编辑器',
                            url: '/upload'
                        }
                    ]
                },
                {
                    icon: 'el-icon-pie-chart',
                    index: 'charts',
                    title: 'schart图表',
                    url: '/charts'
                },
                {
                    icon: 'el-icon-warning-outline',
                    index: '7',
                    title: '错误处理',
                    subs: [
                        {
                            index: '500',
                            title: '500页面',
                            url: '/500'
                        },
                        {
                            index: '404',
                            title: '404页面',
                            url: '/404'
                        }
                    ]
                },
                {
                    icon: 'el-icon-rank',
                    index: '6',
                    title: '其他组件',
                    subs: [
                        {
                            index: 'drag',
                            title: '拖拽列表',
                            url: '/drag'
                        }
                    ]
                },
                {
                    icon: 'el-icon-star-off',
                    index: 'icon',
                    title: '自定义图标',
                    url: '/icon'
                },
            ]
        };
 
Mock.mock('/api/test', 'post', data)
 
export default Mock;