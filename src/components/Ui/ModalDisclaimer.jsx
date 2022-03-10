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
    width: 800,
    height: 500,
    background: "linear-gradient(45deg, #055aaa 30%, #3aacf8 90%)",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    color: "#dfdfdf;",
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
          variant="h1"
          component="h2"
          sx={{ mt: 4 }}
        >
          Welcome to Covid-19. New Zealand Locations
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ mt: 2, color: "#fd780a", fontStyle: "bold" }}
        >
          DISCLAIMER
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 8 }}
          variant="h6"
          component="h2"
        >
          This application was built to display Covid-19 Locations of Interest
          within New Zealand with data sourced from the Ministry of Health.{" "}
          <br></br>In Omicron Phase 3, new locations of interest will not be
          published from 25/02/2022.
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          variant="h6"
          component="h2"
        >
          You can continue to use this application but note the data is stored
          in an external API which was last updated 29/01/2022.
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          variant="h6"
          component="h2"
        >
          For more information on visit{" "}
          <a href="https://www.health.govt.nz/covid-19-novel-coronavirus/covid-19-health-advice-public/covid-19-information-household-and-close-contacts/covid-19-contact-tracing-locations-interest">
            Ministry of Health
          </a>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalDisclaimer;
