import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const ModalDisclaimer = () => {
  // Modal
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  // MODAL
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 450,
    // background: "linear-gradient(45deg, #055aaa 30%, #3aacf8 90%)",

    background: "#fffffff3",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,

    color: "#151514;",
    textAlign: "center",
    outline: "none",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img src={Logo} alt="covid-19 logo" />
        <Typography
          id="modal-modal-title"
          variant="h3"
          component="h3"
          sx={{ mt: 4 }}
        >
          Welcome to Covid-19 <br></br> New Zealand Locations
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ mt: 2, color: "#fd0a0a", fontStyle: "bold" }}
        >
          DISCLAIMER
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 4 }}
          variant="p"
          component="p"
          fontSize="12px"
          lineHeight="1.6"
        >
          From 25/02/2022 Covid-19 New Zealand Locations will no longer be
          updated. This comes in response to the annoucements made by the New
          Zealand Government in relation to Omicron Phase 3. New Locations will
          no longer be published by the Ministry of Health.
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 4 }}
          variant="p"
          component="p"
          fontSize="12px"
          lineHeight="1.6"
        >
          *** Update 04/03/2022 *** <br></br> 💡 This website is now no longer
          updated. But since you are here, I have created an API which contains
          some historical locations to show you how this website was used. Feel
          free to close this modal and have an explore.
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 4 }}
          variant="p"
          component="p"
          fontSize="12px"
          lineHeight="1.6"
          fontStyle="bold"
        >
          KB
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalDisclaimer;
