import axios from 'axios';
const API_KEY = '21864650-2d6f5ba10b4ef36ee5398956b'
const fetchImages = ({query = '', pageNumber = 1}) => {
    return axios 
    .get(`https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits);
}

export default {fetchImages};