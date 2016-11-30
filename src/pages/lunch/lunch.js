import template from '../../lib/template/template';
import tpl from 'raw!./lunch.html';
import styles from './lunch.less';

export default {
    url: '/lunch',
    render: function () {
        return template.compile(tpl)({styles: styles});
    },
    bind: function (){
        setTimeout(() => {
            location.hash = '#/home';
        }, 2000);
    }
};