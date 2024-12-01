import {SearchFilterProps} from "../../domain/product";
import React from "react";


const SearchFilter: React.FC<SearchFilterProps> = ({onSearch}) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
      };

    return (
        <div  className="container-search">
         <input className="search-input" onChange={handleChange} type="text" id="search-products" placeholder="Search" />
           <button className="button-icon">
           <i className="fa-solid fa-magnifying-glass"></i>
           </button>
        </div>
    )
}


export default SearchFilter