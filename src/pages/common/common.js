import 'weui.js';
import template from '../../lib/template/template';
import tpl from 'raw!./common.html';
import styles from './common.less';

export default {
    url: '/common',
    className: 'common',
    render: function () {
        return template.compile(tpl)({styles: styles});
    },
    bind: function () {

    }
};