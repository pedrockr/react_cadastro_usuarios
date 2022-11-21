import React from "react";
import Main from "../templates/Main";

const Home = () => {
  return (
    <Main icon="home" title=" Inicio" subtitle="Cadastro de usuarios">
      <div className="display-4">Bem Vindo!</div>
      <hr />
      <p className="mb-0">Sistema CRUD para treino desenvolvido em React</p>
    </Main>
  );
};

export default Home;
