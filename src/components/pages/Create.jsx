import { React, useState } from 'react';
import useForm from '../../hooks/useForm';
import Request from '../../helpers/Request';
import Global from '../../helpers/Global';

const Create = () => {

  const {form, sent, changed} = useForm({});
  const [response, setResponse] = useState("no_sent");

  const saveArticle = async(e) => {
    e.preventDefault();

    const {data} = await Request(Global.url +'create', 'POST', form);

    if(data.status === "success"){
      setResponse("saved");
    }else{
      setResponse("err");
    }

    const image = document.querySelector("#image");

    if(data.status === "success" && image.files[0]){
      setResponse("saved");

      const formData = new FormData();
      formData.append('image', image.files[0]);

      const upload = await Request(Global.url +'upload-image/'+data.article._id, 'POST', formData, true);

      if(upload.data.status === "success"){
        setResponse("saved");
      }else{
        setResponse("err");
      }

    }
  }

  return (
    <div className='jumbo'>
      <h1>Crear artículo</h1>
      <p>Formulario para crear articulo</p>

      <strong>{response == "saved" ? "Articulo guardado con exito" : ""}</strong>
      <strong>{response == "err" ? "Los datos proporcionados no son correctos" : ""}</strong>
      <form className='form' onSubmit={saveArticle}>
        <div className='form-group'>
          <label htmlFor='title' >Titulo</label>
          <input type='text' name='title' onChange={changed} />
        </div>
        <br />
        <div className='form-group'>
          <label htmlFor='content' >Contenido</label>
          <textarea type='text' name='content' onChange={changed} />
        </div>
        <br />
        <div className='form-group'>
          <label htmlFor='image' >Imagen</label>
          <input type='file' name='image' id='image' onChange={changed} />
        </div>
        <br />
        <input type='submit' value="Guardar" className='btn btn-success' />
      </form>
    </div>
  )
}

export default Create