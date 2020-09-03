const validate = values => {
  let errors = {}
  let {name, description} = values
  if (!name) {
    errors.name = "Please enter task name"
  } else if (name.length < 6) {
    errors.name = "Task name is as least 5 character"
  }
  if (!description) {
    errors.description = "Please enter task description"
  }
  return errors
}

export default validate
