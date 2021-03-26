import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Fave = () => {
    const [isFave, setIsFave] = useState(false);

    return (
        <small className="fave">Fave</small>
    )
    
}

export default Fave;