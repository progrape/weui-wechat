import weui from 'weui.js';
import template from '../../lib/template/template';
import tpl from 'raw!./profile.html';
import styles from './profile.less';

export default {
    url: '/profile',
    className: 'profile',
    render: function () {
        return template.compile(tpl)({styles: styles});
    },
    bind: function () {
        document.querySelector('#avatarCell').addEventListener('click', function(){
            weui.actionSheet([
                {
                    label: '拍照',
                    onClick: () => {}
                },
                {
                    label: '从手机相册选择',
                    onClick: () => {}
                },
                {
                    label: '保存图片',
                    onClick: () => {}
                }
            ], [
                {
                    label: '取消',
                    onClick: function () {
                        console.log('取消');
                    }
                }
            ]);
        }, false);
    }
};