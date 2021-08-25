import {
  Backdrop,
  Button,
  createStyles,
  Fade,
  FormControl,
  Input,
  makeStyles,
  Modal,
  Theme,
} from "@material-ui/core";
import React, { useState } from "react";
import { updateUser } from "../service/apiUpdateuser";

const EditProfile = ({ data }: any) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },

      modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },

      root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "25ch",
        },
      },
    })
  );

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [values, setValues] = useState<any>([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onFinish = (value: any) => {
    setOpen(false);
  };

  const editProfile = async () => {
    const res = await updateUser({
      email: email || data.email,
      username: username || data.username,
    }, data.id);
  };

  return (
    <div>
      {console.log(data)}
      <button type="button" onClick={handleOpen}>
        edit profile
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <div className={classes.paper}>

        <form className={classes.root} noValidate autoComplete="off">
          <Input
            defaultValue={data.username}
            inputProps={{ username: data.username }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input defaultValue={data.email} inputProps={{ email: data.email }}
          onChange={(e) => setEmail(e.target.value)} />

          <Button variant="contained" onClick={editProfile}>
            Edit
          </Button>
        </form>
        </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditProfile;
