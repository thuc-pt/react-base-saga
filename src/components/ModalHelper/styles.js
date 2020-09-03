const styles = (theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],

    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  header: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    backgroundColor: '#dc3545',
    color: 'white'
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  iconHeader: {
    cursor: 'pointer'
  },
  body: {
    padding: theme.spacing(1, 2, 2, 2)
  }
});

export default styles;
