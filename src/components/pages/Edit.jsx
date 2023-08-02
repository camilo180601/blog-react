import { React, useState, useEffect } from 'react';
import useForm from '../../hooks/useForm';
import Request from '../../helpers/Request';
import Global from '../../helpers/Global';
import { useParams } from 'react-router-dom';

const Edit = () => {

  const [article, setArticle] = useState({});
  const { form, sent, changed } = useForm({});
  const [response, setResponse] = useState("no_sent");
  const params = useParams();

  useEffect(() => {
    getArticle();
  }, [])

  const getArticle = async () => {

    const { data } = await Request(Global.url + "article/" + params.id, "GET");

    if (data.status === "success") {
      setArticle(data.article)
    }

  }

  const editArticle = async (e) => {
    e.preventDefault();

    const { data } = await Request(Global.url + 'article/' + params.id, 'PUT', form);

    if (data.status === "success") {
      setResponse("saved");
    } else {
      setResponse("err");
    }

    const image = document.querySelector("#image");

    if (data.status === "success" && image.files[0]) {
      setResponse("saved");

      const formData = new FormData();
      formData.append('image', image.files[0]);

      const upload = await Request(Global.url + 'upload-image/' + data.article._id, 'POST', formData, true);

      if (upload.data.status === "success") {
        setResponse("saved");
      } else {
        setResponse("err");
      }

    }
  }

  return (
    <div className='jumbo'>
      <h1>Editar artículo</h1>
      <p>Formulario para editar: {article.title}</p>

      <strong>{response == "saved" ? "Articulo guardado con exito" : ""}</strong>
      <strong>{response == "err" ? "Los datos proporcionados no son correctos" : ""}</strong>
      <form className='form' onSubmit={editArticle}>
        <div className='form-group'>
          <label htmlFor='title' >Titulo</label>
          <input type='text' name='title' onChange={changed} defaultValue={article.title} />
        </div>
        <br />
        <div className='form-group'>
          <label htmlFor='content' >Contenido</label>
          <textarea type='text' name='content' onChange={changed} defaultValue={article.content} />
        </div>
        <br />
        <div className='form-group'>
          <label htmlFor='image' >Imagen</label>
          <div className='mask'>
            {article.image !== "default.png" ? (
              <img src={Global.url + 'image/' + article.image} alt="Imagen del artículo" />
            ) : (
              <img src='https://blog.interfell.com/hubfs/JavaScript%20un%20lenguaje%20de%20programaci%C3%B3n.jpg' />
            )}

          </div>
          <input type='file' name='image' id='image' onChange={changed} />
        </div>
        <br />
        <input type='submit' value="Guardar" className='btn btn-success' />
      </form>
    </div>
  )
}

export default Edit