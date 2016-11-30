import 'weui.js';
import template from '../../lib/template/template';
import tpl from 'raw!./security.html';
import styles from './security.less';

export default {
    url: '/security',
    className: 'security',
    render: function () {
        return template.compile(tpl)({styles: styles});
    },
    bind: function () {

    }
};