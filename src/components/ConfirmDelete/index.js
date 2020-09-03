import React from 'react';
import Button from '@material-ui/core/Button';

const ConfirmDelete = props => {
  let {onDeleteTask} = props
  return (
    <div>
      <strong>Are you sure?</strong>
      <br />
      <div className="text-center">
        <Button
          onClick={onDeleteTask}
          type="submit"
          color="primary"
          variant="contained"
          className="none-outline">Yes</Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;

