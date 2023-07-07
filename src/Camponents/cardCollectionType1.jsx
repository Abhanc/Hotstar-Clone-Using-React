import React from "react";
import Cardtype1 from "./cardType1";
import Data from "../Item.js";

function createCard(information) {
  return (
    <Cardtype1
      key={information.id}
      name={information.name}
      img={information.imgURL}
      about={information.info}
    />
  );
}

function collection() {

  return (
    <div>
      <a href="#" className="listHeading">
        Watchlist
      </a> 
      <div className="MoviesLIst">
        <div className="Card-container-horizental">
            {Data.map(createCard)}
            {/* {Data.filter(){

            }} */}
        </div>
      </div>
    </div>
  );
}
export default collection;
