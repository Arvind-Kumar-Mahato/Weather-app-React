import React from "react";
import Search from "./Search";

import "../styles/Header.css";

export default function Header({ searchCity }) {
    return ( 
        <>
            <div className="Header">
                <Search searchCity = {searchCity} />
            </div>
        </>
    );
}