import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import './alerts.sass'

function Alerts() {
  return (
  <div className="alerts">
    <Stack className="alert-success alert-increase" spacing={2}>
      <Alert
        sx={{ height: "85px", display: "flex", alignItems: "center" }}
        onClose={() => {
          document.querySelector(".alert-increase").style.display = "none";
        }}
      >
        Məhsul sayı artırıldı!
      </Alert>
    </Stack>
    <Stack className="alert-success alert-decrease" spacing={2}>
      <Alert
        sx={{ height: "85px", display: "flex", alignItems: "center" }}
        onClose={() => {
          document.querySelector(".alert-decrease").style.display = "none";
        }}
      >
        Məhsul sayı azaldıldı!
      </Alert>
    </Stack>
    <Stack className="alert-success alert-delete" spacing={2}>
      <Alert
        severity="error"
        sx={{ height: "85px", display: "flex", alignItems: "center" }}
        onClose={() => {
          document.querySelector(".alert-delete").style.display = "none";
        }}
      >
        Məhsul səbətdən silindi!
      </Alert>
    </Stack>
    <Stack id="alert-success_add" spacing={2}>
      <Alert
        sx={{ height: "60px", display: "flex", alignItems: "center" }}
        onClose={() => {
          document.querySelector("#alert-success_add").style.display = "none";
        }}
      >
        Məhsul səbətə əlavə olundu!
      </Alert>
    </Stack>
  </div>
  )
};

export default Alerts;
