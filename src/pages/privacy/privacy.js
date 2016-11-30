import template from '../../lib/template/template';
import tpl from 'raw!./privacy.html';
import styles from './privacy.less';

export default {
    url: '/privacy',
    className: 'privacy',
    render: function () {
        return template.compile(tpl)({styles: styles});
    },
    bind: function () {

    }
};