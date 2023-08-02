import React from 'react'
import Global from '../../helpers/Global';
import Request from '../../helpers/Request';
import { Link } from 'react-router-dom';

const List = ({ articles, setArticles }) => {

    const deleteArticle = async (id) => {

        let { data } = await Request(Global.url + 'article/' + id, "DELETE");
        let articlesUpdated = articles.filter(article => article._id !== id);
        setArticles(articlesUpdated);
    }

    return (
        articles.map(article => {
            return (
                <article className="article-item" key={article._id}>
                    <div className='mask'>
                        {article.image !== "default.png" ? (
                            <img src={Global.url + 'image/' + article.image} alt="Imagen del artículo" />
                        ) : (
                            <img src='https://blog.interfell.com/hubfs/JavaScript%20un%20lenguaje%20de%20programaci%C3%B3n.jpg' />
                        )}
                    </div>
                    <div className='data'>
                        <h3 className="title"><Link to={"/article/" + article._id}>{article.title}</Link></h3>
                        <p className="description">{article.content}</p>

                        <Link to={"/edit/" + article._id} className='edit'>Editar</Link>
                        <button className="delete" onClick={() => deleteArticle(article._id)} >Borrar</button>
                    </div>
                </article>
            );
        })
    )
}

export default List