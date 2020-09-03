const styles = theme => ({
  box: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  shape: {
    padding: '1rem',
    marginTop: '1rem',
    background: theme.bgColor.green,
    borderRadius: '0.25rem',
    color: theme.color.white
  }
});

export default styles;