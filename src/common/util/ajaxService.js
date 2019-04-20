import jquery from './jquery';
import router from 'vue-router';

const baseUrl = 'http://127.0.0.1:3000';

function send(type, url, data) {
    url = baseUrl + url;
    let promise;
    if (type === 'POST') {
        promise = jquery.ajax({
            xhrFields: {
                withCredentials: true
            },
            url: url,
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json;charset=utf-8'
        });
    } else {
        promise = jquery.get(url, data);
    }
    const promiseDemo = new Promise((resolve, reject) => {
        return promise.then(res => {
            const code = res.code;
            if (
                code === 0 ||
                code === 1000111 ||
                code === 990000 ||
                code === 888889
            ) {
                resolve(res);
            } else if (code === 333) {
                router.push('login');
            } else {
                reject(res);
            }
        });
    });
    return promiseDemo.catch(function(error) {
        if (error) {
            console.log('失败了:' + error);
        }
    });
}

const get = function(url, data) {
    return send('GET', url, data);
};

const post = function(url, data) {
    return send('POST', url, data);
};

export default {
    get: get,
    post: post
};
