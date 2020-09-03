import React from 'react';
import TextField from '@material-ui/core/TextField';
import './styles.scss'

function SearchBox(props) {
  let {onFilterValue} = props
  return (
    <form noValidate autoComplete="off">
      <TextField
        autoComplete="off"
        placeholder="Search by task name"
        onChange={onFilterValue}
        className="w-50"
      />
    </form>
  )
}

export default SearchBox;
