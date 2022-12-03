import React, { Component } from "react";
import Main from "../templates/Main";
<<<<<<< HEAD
import axios from "axios";

const headerProps = {
  icons: "users",
  title: "Usuários",
  subtitle: "Cadastro de Usuários",
};

const baseUrl = "http://localhost:3001/users";
const initialState = {
  user: { name: "", email: "" },
  list: [],
};

class UserCrud extends Component {
  state = { ...initialState };
  UNSAFE_componentWillMount() {
    axios(baseUrl).then((resp) => {
      this.setState({ list: resp.data });
    });
  }
  clear() {
    this.setState({ user: initialState.user });
  }
  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user).then((resp) => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ user: initialState.user, list });
    });
  }
  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 com-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.name}
                onChange={(e) => this.updatedField(e)}
                placeholder="Digite o nome ..."
              />
            </div>
          </div>
          <div className="col-12 com-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={(e) => this.updatedField(e)}
                placeholder="Digite o e-mail ..."
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={(e) => this.save(e)}>
              Salvar
            </button>
            <button
              className="btn btn-secondary ms-2"
              onClick={(e) => this.clear(e)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }
  getUpdatedList(user) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    list.unshift(user);
    return list;
  }
  updatedField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }
  render() {
    return <Main {...headerProps}>{this.renderForm()}</Main>;
  }
}

=======

const headerProps = {
  icon: "users",
  title: " Usuários",
  subtitle: "Cadastro de Usuários",
};

const UserCrud = (props) => {
  return <Main {...headerProps}>Cadastro de Usuario</Main>;
};

>>>>>>> 5714ee5777f8137f27e94c8e13380ea92bdb75e5
export default UserCrud;
