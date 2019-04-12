import jquery from './jquery';
const baseUrl = 'http://127.0.0.1:3000';

function send(type, url, data) {
    url = baseUrl + url;
    let promise;
    if (type === 'POST') {
        promise = jquery.ajax({
            url: url,
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json;charset=utf-8'
        });
        console.log(promise);
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
            } else {
                // errorHandler(res);
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
