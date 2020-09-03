import React from 'react';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

const renderFromHelper = ({touched, error}) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const renderSelectField = ({
  input,
  label,
  meta: {touched, error},
  children,
  ...custom
}) => (
  <FormControl error={touched && error} fullWidth>
    <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
    <Select native {...input} {...custom}>
      {children}
    </Select>
    {renderFromHelper({touched, error})}
  </FormControl>
)

export default renderSelectField;
