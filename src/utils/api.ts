import { useAuthStore } from '../stores';

type RequestMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

type Headers = {
    'Content-Type'?: string,
    Authorization?: string
};

type RequestOptions = {
    method: RequestMethods,
    headers: Headers,
    body?: string
};

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method: RequestMethods) {
    return (url: string, body: object) => {
        const requestOptions: RequestOptions = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }
        return fetch(url, requestOptions).then(handleResponse);
    }
}

function authHeader(url: string) {
    const { user } = useAuthStore();
    const isLoggedIn = !!user?.token;
    const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${user.token}` };
    } else {
        return {};
    }
}

async function handleResponse(response: Response) {
    const text = await response.text();
    const data = text && JSON.parse(text);
    if (!response.ok) {
        const { user, logout } = useAuthStore();
        if ([401, 403].includes(response.status) && user) {
            logout();
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    return data;
}