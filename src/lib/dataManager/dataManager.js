import localStorage from '../localStorage/localStorage';

let data = {};

export default {
    /**
     *
     * @param {String} key
     */
    getData: function (key) {
        data = JSON.parse(localStorage.getItem('weui-wechat') || '{}') || data;
        return data[key];
    },
    /**
     *
     * @param {String} key
     * @param {Object} value
     */
    setData: function (key, value) {
        data[key] = value;
        localStorage.setItem('weui-wechat', JSON.stringify(data));
    }
}