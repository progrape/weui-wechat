import $ from 'jquery';
$.getJSON('https://team.weui.io/api/sign?url=' + encodeURIComponent(location.href.split('#')[0])).success((res) => {
    wx.config({
        beta: true,
        debug: false,
        appId: res.appid,
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'scanQRCode',
            'setBounceBackground'
        ]
    });

    const option = {
        title: 'WeUI',
        desc: 'WeUI, 为微信 Web 服务量身设计',
        link: 'https://team.weui.io/jfeng/weui-wechat',
        imgUrl: 'https://mmrb.github.io/avatar/bear.jpg'
    };
    wx.ready(function () {
        wx.invoke('setBounceBackground', {
            'backgroundColor': '#F2F2F2',
            'footerBounceColor': '#F2F2F2'
        });
        wx.onMenuShareTimeline(option);
        wx.onMenuShareQQ(option);
        wx.onMenuShareAppMessage(option);
    });
});