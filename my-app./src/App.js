import React, { Component } from 'react';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';
import imagesApi from './services/images-serviceAPI'

class App extends Component {
state = {
  images : [],
  pageNumber: 1,
  query: '',
  isLoading: false,
  error: null,
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

render() {
  const {images,isLoading} = this.state;

  return (
  <>
    <Searchbar onSubmit = {this.onChangeQuery}></Searchbar>
    <ImageGallery>

    </ImageGallery>
      {isLoading && <Loader/>}
      {images.length > 0 && !isLoading && (
    <Button>

    </Button>)}
    <Modal>

    </Modal>
  </>

  )
};
}
export default App;