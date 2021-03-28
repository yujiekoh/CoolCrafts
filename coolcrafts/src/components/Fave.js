import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Fave = () => {
    const [isFave, setIsFave] = useState(false);

    return (
        <button className="fave">Add to Favourites</button>
    )
    
}

export default Fave;