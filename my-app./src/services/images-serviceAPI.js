import axios from 'axios';

const fetchImages = ({query = '', pageNumber = 1}) => {
    return axios 
    .get(`https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=т21864650-2d6f5ba10b4ef36ee5398956b&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.images);
}

export default fetchImages;