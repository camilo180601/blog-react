import React from 'react'
import { useState, useEffect } from 'react'
import Global from '../../helpers/Global';
import Request from '../../helpers/Request';
import List from './List';

const Articles = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    const url = Global.url + "articles";

    const { data, loading } = await Request(url, "GET");

    if (data.status === "success") {
      setArticles(data.articles);
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? "Cargando..." :
        articles.length >= 1 ? 
          <List articles={articles} setArticles={setArticles} /> 
          : <h1>¡¡No hay articulos!!</h1>
      }
    </>
  )
}

export default Articles