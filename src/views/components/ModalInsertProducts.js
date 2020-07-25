import React, { useState } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import Modal from "./StyledModal";

const ModalInsertProducts = ({ open, setOpen, handleCreateProduct }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState("");

  const handleSetPrice = (str) => {
    setPrice(parseInt(str.replace(/[^\d]+/g, "")));
  };

  const handleClear = () => {
    setName("");
    setPrice("");
    setDescription("");
    setImage("");
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      <Grid container spacing={4}>
        <Grid item xs={3} />
        <Grid item xs={9}>
          <Typography variant="h4">Cadastrar Produto</Typography>
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
            label="Nome"
          />
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={3} />
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            value={price}
            onChange={(event) => handleSetPrice(event.target.value)}
            label="Preço"
          />
        </Grid>
        <Grid item xs={3} style={{ alignSelf: "center" }}>
          <Typography>{`R$ ${parseFloat(price / 100 || 0).toFixed(
            2
          )}`}</Typography>
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            fullWidth
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            label="Descrição"
          />
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={3} />
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            fullWidth
            value={image}
            onChange={(event) => setImage(event.target.value)}
            label="Image"
            placeholder="Adicione uma url download de uma imagem"
          />
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={3} />
        <Grid item xs={3}>
          <Button
            fullWidth
            color="secondary"
            onClick={() => handleClear()}
            variant="outlined"
          >
            Limpar
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            color="primary"
            onClick={() =>
              handleCreateProduct({
                name,
                price,
                descricao: description,
                image,
              })
            }
            variant="contained"
          >
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ModalInsertProducts;
