import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Global from '../../helpers/Global';
import Request from '../../helpers/Request';
import List from './List';

const Search = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getArticles()
  }, [params])

  const getArticles = async () => {
    const url = Global.url + "search/"+params.search;

    const { data, loading } = await Request(url, "GET");

    if (data.status === "success") {
      setArticles(data.articles);
      setLoading(false);
    }else{
      setArticles([]);
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

export default Search