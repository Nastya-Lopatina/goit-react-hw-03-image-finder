import React, { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
//import Modal from './components/Modal/Modal';
import imagesApi from './services/images-serviceAPI'
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {
state = {
  images : [],
  pageNumber: 1,
  query: '',
  isLoading: false,
  error: null,
  showModal: false,
  largeImage: [],
  largeImageId: null,
};

componentDidUpdate(prevProps, prevState){
  if(prevState.query !== this.state.query){
      this.fetchImages();
  }
}

onChangeQuery = query => {
this.setState({query,  images : [],  pageNumber: 1,  error: null});
}

fetchImages = () => {
  const {query,pageNumber} = this.state;
  const options = {
    query,
    pageNumber,
  };

  this.setState({isLoading: true});

  imagesApi
  .fetchImages(options)
  .then(images => {
        this.setState(state =>({
        images: [...state.images, ...images],
        pageNumber: state.pageNumber + 1,
      }));
  })
  .catch(error => this.setState({error}))
  .finally(() => this.setState({isLoading: false}));
  
};

toggleModal = () => {
  this.setState(({showModal}) => ({
    showModal: !showModal,
  }))
};

findBigPic = () => {
this.state.images.find(image => {
 return image.id === this.state.largeImageId;
})
}

render() {
  const {images,isLoading} = this.state;

  return (
  <>
    <Searchbar onSubmit = {this.onChangeQuery}></Searchbar>
    <ImageGallery onClick = {this.toggleModal}
      images = {images}></ImageGallery>
      {isLoading && <Loader/>}
      {images.length > 0 && !isLoading && (
    <Button></Button>)}
     
  </>

  )
};
}
export default App;