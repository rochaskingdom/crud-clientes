import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteCliente = this.deleteCliente.bind(this);
        this.editCliente = this.editCliente.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data.result})
            });
    }

    deleteCliente(userId) {
        ApiService.deleteCliente(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== userId)});
           })

    }

    editCliente(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-cliente');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-cliente');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Clientes</h2>
                <button className="btn btn-primary" onClick={() => this.addUser()}>Adicionar Cliente</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>CEP</th>
                            <th>Logradouro</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>Uf</th>
                            <th>Telefone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                        user =>
                                    <tr key={user.id}>
                                        <td>{user.nome}</td>
                                        <td>{user.cpf}</td>
                                        <td>{user.cep}</td>
                                        <td>{user.logradouro}</td>
                                        <td>{user.bairro}</td>
                                        <td>{user.cidade}</td>
                                        <td>{user.uf}</td>
                                        <td>{user.telefone}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => this.deleteCliente(user.id)}>Deletar</button>
                                            <button className="btn btn-warning" onClick={() => this.editCliente(user.id)} style={{marginLeft: '20px'}}>Editar</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListUserComponent;