import React from "react"

function home() {
  return (
    <>
        <div className="App">
            <p className="submit_text">Sumite text message</p>
            <input type="text" id="submit_text"/>
            <br/><br/>
            <button className="sumited">Submit(button 1)</button>
            <p className="search_text">Search text message</p>
            <input type="text" id="search_text"/><br/><br/>
            <button className="search">search(button 2)</button>
            <p className="description_text">Show seached text message here</p>
            <input type="text" id="description_text"/><br/><br/>
            <button className="clear">clear all (button 3)</button><br/><br/>
            <button className="logout">logout (button 4)</button>
        </div>
    </>

  );
}

export default home;
