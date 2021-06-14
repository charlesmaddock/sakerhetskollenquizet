import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    outline: "none",
    borderRadius: 4,
  },
}));

const TransitionsModal = ({ open, setOpen, title="title", children }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item style={{cursor: "pointer", width: 50}}/>
              <Grid item>
                <p style={{fontWeight: "bold", fontSize: 20, marginBottom: 0, marginTop: 16}}>
                  {title}
                </p>
              </Grid>
              <Grid item>
                <CloseIcon
                  onClick={() => setOpen(false)}
                  style={{cursor: "pointer", fontSize: 22, marginTop: 20, marginRight: 20}}
                />
              </Grid>
            </Grid>
            {children}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal