import request from '../utils/request';

export async function fetchItem(id) {
    console.log(111);
    const options = {
        url: `getItem`,
        method: 'get',
        params: {
            id
        }
    };
    return await request(options);
}

export async function getDetail(id) {
    const options = {
        url: `getDetail`,
        method: 'post',
        data: {
            id
        }
    };
    return await request(options);
}