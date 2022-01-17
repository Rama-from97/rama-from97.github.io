'use strict';

// Módulo de bajo nivel

async function get(url, id) {
    try {
        return await (await fetch(url + (id || ''), {method: 'get'})).json()
    } catch (error) {
        console.error('GET ERROR', error)
    }
}

async function post(url, data) {
    try {
        return await (await fetch(url, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {'content-type': 'application/json'}
        })).json()
    } catch (error) {
        console.error('GET ERROR', error, error.message)
    }
}

async function put(url, id, data) {
    try {
        return await (await fetch(url + id , {
            method: 'put',
            body: JSON.stringify(data),
            headers: {'content-type': 'application/json'}

        })).json()
    } catch (error) {
        console.error('GET ERROR', error, error.message)
    }
}

async function del(url, id) {
    try {
        return await (await fetch(url + id, {method: 'delete'})).json()
    } catch (error) {
        console.error('GET ERROR', error, error.message)
    }
}