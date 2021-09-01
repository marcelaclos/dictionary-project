import React, {useState} from "react";
import "./Dictionary.css";



export default function Dictionary() {
    let [Keworkd, setKeword] = useState("");
    function search(event){
        event.preventDefault();
    }
    function handleKeywordChange(event){
        setKeword(event.target.value);

    }

    return (
        <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
        </form>
    </div>
    ) ;

}
