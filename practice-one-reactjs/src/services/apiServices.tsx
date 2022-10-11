// Libraries
import React from 'react';

// Constants
import { API } from '@constants/apis';

export default class ApiService<T> {
  get = async (path: string): Promise<T[]> => {
    const url = `${import.meta.env.VITE_BASE_URL_ENDPOINT}/${path}`;
    const response = await fetch(url);

    return response.json();
  };

  post = async (path: string, data: T): Promise<T[]> => {
    const url = `${import.meta.env.VITE_BASE_URL_ENDPOINT}/${path}`;
    const response = await fetch(url, {
      method: API.HTTP_METHODS.POST,
      headers: API.HEADERS,
      body: JSON.stringify(data),
    });

    return response.json();
  };

  delete = async (path: string): Promise<void> => {
    const url = `${import.meta.env.VITE_BASE_URL_ENDPOINT}/${path}`;
    await fetch(url, {
      method: API.HTTP_METHODS.DELETE,
      headers: API.HEADERS,
    });
  };

  patch = async (path: string, data: T): Promise<T> => {
    const url = `${import.meta.env.VITE_BASE_URL_ENDPOINT}/${path}`;
    const response = await fetch(url, {
      method: API.HTTP_METHODS.PATCH,
      headers: API.HEADERS,
      body: JSON.stringify(data),
    });
    return response.json();
  };
}
