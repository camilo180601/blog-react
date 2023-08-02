import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  const makeSearch = (e) => {
    e.preventDefault();
    let my_search = e.target.search_field.value;
    navigate("/search/"+my_search, {replace: true});
  }

  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form onSubmit={makeSearch}>
          <input type="text" name='search_field' />
          <input id="search" type='submit' value="Buscar" />
        </form>
      </div>
    </aside>
  )
}

export default Sidebar