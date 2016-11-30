import weui from 'weui.js';
import template from '../../lib/template/template';
import dataManager from '../../lib/dataManager/dataManager';
import tpl from 'raw!./home.html';
import styles from './home.less';
import contacts from './contacts';
import chats from './chats';

import chat from './icon/chat.png';
import contact from './icon/contact.png';
import discovery from './icon/discovery.png';
import profile from './icon/profile.png';

export default {
    url: '/home',
    className: 'home',
    render: function () {
        return template.compile(tpl)({
            styles: styles,
            chats,
            contacts,
            chat,
            contact,
            discovery,
            profile
        });
    },
    bind: function () {
        weui.tab('#tab', {
            defaultIndex: dataManager.getData('tabIndex') || 0,
            onChange: function(index){
                dataManager.setData('tabIndex', index);
            }
        });
        weui.searchBar('#searchBar');
        document.querySelector('#scanCell').addEventListener('click', function(){
            wx.scanQRCode({
                needResult: 0,
                success: function (res) {
                    console.log(res);
                }
            });
        }, false);
    }
};

