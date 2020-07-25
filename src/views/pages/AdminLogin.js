import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Typography, Button } from "@material-ui/core";

import api from "../../services/api";
import ModalInsertProducts from "../components/ModalInsertProducts";

import "../../assets/css/admin-login.css";

const AdminLogin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openModal, setOpenModal] = useState(false);
  const handleCreateProduct = async (object) => {
    await api.createProducts(object);
    setOpenModal(false);
  };

  return (
    <div className="login-form">
      <Typography variant="h6" color="primary" className="loginTitle">
        login para administração
      </Typography>
      <TextField
        className="textfield"
        label="e-mail"
        variant="outlined"
        color="secondary"
        required
      />
      <TextField
        className="textfield"
        label="senha"
        variant="outlined"
        color="secondary"
        required
      />
      <Button variant="contained" color="primary">
        acessar
      </Button>
      <ModalInsertProducts
        open={openModal}
        setOpen={setOpenModal}
        handleCreateProduct={handleCreateProduct}
      />
    </div>
  );
};

export default AdminLogin;
