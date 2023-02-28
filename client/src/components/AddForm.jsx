import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AddForm = () => {

  const [hasUPC, setHasUPC] = useState(true);

  const searchUPC = (e) => {
    e.preventDefault();
  };

  const searchProdName = (e) => {
    e.preventDefault();
  };

  return (
    <>
    </>
  );
};

export default AddForm;