import React, { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import imagesApi from './services/images-serviceAPI'
import style from './App.module.css'
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {
state = {
  images : [],
  pageNumber: 1,
  query: '',
  isLoading: false,
  error: null,
  showModal: false,
  largeImage: {},
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
    this.scrollToDown();
  })
  .catch(error => this.setState({error}))
  .finally(() => this.setState({isLoading: false}));
  
};
  
scrollToDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };  

toggleModal = () => {
  this.setState(({showModal}) => ({
    showModal: !showModal,
  }))
};

openBigPic = largeImage => {
    this.setState({ largeImage });
    this.toggleModal();
  };

render() {
  const {images,isLoading,showModal,largeImage} = this.state;
  const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;
  return (
  <div className = {style.App}>
    <Searchbar onSubmit = {this.onChangeQuery}></Searchbar>
      <ImageGallery
        onClick={this.openBigPic}
        images={images}>
        
      </ImageGallery>
      
      {isLoading && <Loader/>}
      {shouldRenderLoadMoreButton && (<Button onClick={this.fetchImages}></Button>)}
      {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage.largeImageURL} alt={largeImage.tags} />
          </Modal>
        )}
  </div>

  )
};
}
export default App;