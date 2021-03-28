import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Add = () => {
  const [isAdded, setIsAdded] = useState(false);

  return <button className="add">Add to Basket</button>;
};

export default Add;
