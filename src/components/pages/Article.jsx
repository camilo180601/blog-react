import { React, useEffect } from 'react'
import { useState } from 'react';
import Global from '../../helpers/Global';
import Request from '../../helpers/Request';
import { useParams } from 'react-router-dom';

const Article = () => {

  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getArticle();
  }, [])

  const getArticle = async () => {

    const { data, loading } = await Request(Global.url + "article/" + params.id, "GET");

    if (data.status === "success") {
      setArticle(data.article)
    }

    setLoading(false)
  }

  return (
    <div className='jumbo'>
      {loading ? "Cargando..." :
        <>
          <div className='mask'>
            {article.image !== "default.png" ? (
              <img src={Global.url + 'image/' + article.image} alt="Imagen del artículo" />
            ) : (
              <img src='https://blog.interfell.com/hubfs/JavaScript%20un%20lenguaje%20de%20programaci%C3%B3n.jpg' />
            )}
          </div>
          <h1>{article.title}</h1>
          <span>{article.date}</span>
          <p>{article.content}</p>
        </>
      }
    </div>
  )
}

export default Article