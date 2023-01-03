const API_BASE = 'https://pixabay.com/api';
const API_KEY = '30573200-e6482719e2878fad01ed65176';

export function apiSearch(query, page) {
    return fetch(`${API_BASE}/?q=${query}
    &page=${page}&key=${API_KEY}&image_type=photo
    &orientation=horizontal&per_page=12`).then(res => res.json());
}