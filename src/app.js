import './app.less';
import './lib/jsapi/jsapi';
import attachFastClick from 'fastclick';
import Router from 'router';
import Lunch from './pages/lunch/lunch';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Setting from './pages/setting/setting';
import Security from './pages/security/security';
import Notice from './pages/notice/notice';
import Privacy from './pages/privacy/privacy';
import Common from './pages/common/common';

attachFastClick.attach(document.body);

const router = new Router();
router
    .push(Lunch)
    .push(Home)
    .push(Profile)
    .push(Setting)
    .push(Security)
    .push(Notice)
    .push(Privacy)
    .push(Common)
    .setDefault('/lunch')
    .init();