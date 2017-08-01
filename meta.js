/**
 * @file meta config
 * @author mj(zoumiaojiang@gmail.com)
 */

module.exports = {
    etpl: {
        commandOpen: '{%',
        commandClose: '%}',
        variableOpen: '*__',
        variableClose: '__*'
    },
    extData: {
        packageJsonAuthor: '*__ author __*<*__ email __*>'
    },
    renderIgnores: [],
    exportsIgnores: [
        '.git',
        'docs'
    ],
    subList: {
        appShell: [
            {
                value: 'BottomNavigation',
                name: 'BottomNavigation',
                desc: '这是一个包含头部和尾部的 shell, 其中支持过场动画',
                imgs: [
                    {
                        alt: '主页面',
                        src: 'https://bos.nj.bpc.baidu.com/mms-res/pwa/entry.png'
                    },
                    {
                        alt: '详情页',
                        src: 'https://bos.nj.bpc.baidu.com/mms-res/pwa/entry.png'
                    },
                    {
                        alt: '个人中心',
                        src: 'https://bos.nj.bpc.baidu.com/mms-res/pwa/entry.png'
                    }
                ]
            }
        ]
    },
    schema: {
        dirPath: {
            'type': 'string',
            'name': '项目目录',
            'default': './',
            'invalidate': '该 path 不存在, 请输入正确的 path。',
            'description': '存储导出工程的目录',
            'disable': true,
            'jsonType': 'string'
        },
        name: {
            'type': 'string',
            'name': '项目名称',
            'default': 'pwa-project',
            'regExp': '^([a-z_][0-9a-z_\\-]{1,213})?$',
            'invalidate': '项目名称请输入小写字母数字 - _ 等 url 安全字符',
            'description': '工程的项目名和文件夹名',
            'jsonType': 'string'
        },
        author: {
            'type': 'string',
            'name': '项目作者',
            'default': 'yourname',
            'description': '工程的作者，代码注释和 package.json 需要用到',
            'jsonType': 'string'
        },
        email: {
            'type': 'string',
            'name': 'email',
            'default': 'someone@somecompany.com',
            'regExp': '^(\\w-*\\.*)+@(\\w-?)+(\\.\\w{2,})+$',
            'invalidate': '邮箱格式错误',
            'jsonType': 'string',
            'description': '作者邮箱'
        },
        desc: {
            'type': 'string',
            'name': '项目描述',
            'default': '这是一个 pwa 项目',
            'jsonType': 'string',
            'description': '工程的描述，用于 package.json 和 manifest.json 中的项目描述'
        },
        isSsr: {
            'type': 'boolean',
            'name': '服务端渲染',
            'default': false,
            'disable': true,
            'required': true,
            'jsonType': 'boolean',
            'description': '是否需要服务端渲染'
        }
    }
};
