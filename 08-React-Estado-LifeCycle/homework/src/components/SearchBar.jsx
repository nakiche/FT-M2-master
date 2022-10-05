import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  return (
    <form className= "form-inline" onSubmit={(e) => {
      e.preventDefault();
      onSearch("Cairns");
    }}>
      <input className="form-control mr-sm-2"
        type="text"
        placeholder="Ciudad..."
      />

      {/*<input type="submit" value="Agregar" />*/}
      <button className="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={onSearch}>Agregar</button>
    </form>
  );
}
