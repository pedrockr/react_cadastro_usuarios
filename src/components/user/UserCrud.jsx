import React from "react";
import Main from "../templates/Main";

const headerProps = {
  icon: "users",
  title: " Usuários",
  subtitle: "Cadastro de Usuários",
};

const UserCrud = (props) => {
  return <Main {...headerProps}>Cadastro de Usuario</Main>;
};

export default UserCrud;
