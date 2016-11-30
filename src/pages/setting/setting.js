import 'weui.js';
import template from '../../lib/template/template';
import tpl from 'raw!./setting.html';
import styles from './setting.less';

export default {
    url: '/setting',
    className: 'setting',
    render: function () {
        return template.compile(tpl)({styles: styles});
    },
    bind: function () {
        $(this).on('click', '#exitBtn', function (){
            $.weui.actionSheet([
                {
                    label: '确定退出',
                    onClick: () => {
                        wx.closeWindow();
                    }
                }
            ]);
        });
    }
};