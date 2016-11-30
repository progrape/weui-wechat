import template from '../../lib/template/template';
import tpl from 'raw!./notice.html';
import styles from './notice.less';

export default {
    url: '/notice',
    className: 'notice',
    render: function () {
        return template.compile(tpl)({styles: styles});
    },
    bind: function () {

    }
};