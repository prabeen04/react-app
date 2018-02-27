import React from 'react';
import TextField from 'material-ui/TextField';

const FilterInput = (props) => {
  const sendInput = (e) =>{
      let input = e.target.value;
      props.filter(input);
  }
  return(
    <TextField
      floatingLabelText="Filter NewsSearch"
       onChange={sendInput}
     />
  );
}

export default FilterInput;
