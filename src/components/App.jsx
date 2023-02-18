import React, { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as pixabayApi from 'api/pixabayApi';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  useEffect(() => {
    if (!query) return;
    (async () => {
      try {
        setIsLoading(true);
        const { images, totalImages } = await pixabayApi.getNormalisedImages(
          query,
          page
        );
        if (!images.length) {
          setError('Sorry. There are no images ... 😭');
          return;
        }
        setImages(prev => [...prev, ...images]);
        setError('');
        setTotalImages(totalImages);
      } catch (error) {
        setError('Oops. Something went wrong 😭');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, query]);

  const getQuery = value => {
    if (!value.trim() || value === query) {
      setError('Please, change your request');
      return;
    }
    setImages([]);
    setTotalImages(0);
    setPage(1);
    setQuery(value);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div>
      <Searchbar getQuery={getQuery} />
      <ImageGallery images={images} />
      {!isLoading && totalImages !== images.length && (
        <Button label="Load more" onClick={loadMore} />
      )}
      {isLoading && <Loader />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        theme="colored"
      />
    </div>
  );
};
