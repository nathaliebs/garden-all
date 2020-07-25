import React from "react";
import PropTypes from "prop-types";
import { Modal, Fade, Grid, makeStyles, IconButton } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.2)",
  },
  paper: {
    position: "relative",
    width: "55%",
    maxWidth: "600px",
    maxHeight: "100%",
    overflow: "auto",
    backgroundColor: "white",
    border: "none",
    outline: 0,
    boxShadow:
      "0 15px 12px 0 rgba(0, 0, 0, 0.22), 0 19px 38px 0 rgba(0, 0, 0, 0.25)",
    padding: "30px",
    borderRadius: "6px",
    "@media (max-width:800px)": {
      height: "50%",
      marginBottom: "355px",
    },
    "@media (max-width:959px)": {
      width: "80vw",
    },
    "@media (max-width:767px)": {
      width: "100vw",
      height: "auto",
      marginBottom: "0",
      overflow: "scroll",
      borderRadius: "15px",
      padding: "15px",
    },
  },
  buttonClose: {
    position: "absolute",
    top: "0",
    right: "0",
  },
}));

export default function StyledModal({ children, open, setOpen }) {
  const classes = useStyles();
  return (
    <Modal
      hideBackdrop
      className={classes.modal}
      open={open}
      closeAfterTransition
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={12}>
              <IconButton
                className={classes.buttonClose}
                color="primary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                X
              </IconButton>
              {children}
            </Grid>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}

StyledModal.propTypes = {
  children: PropTypes.object,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
