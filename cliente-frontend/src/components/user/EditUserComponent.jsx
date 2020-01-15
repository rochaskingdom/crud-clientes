import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditUserComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            nome: '',
            cpf: '',
            cep: '',
            logradouro: '',
            bairro: '',
            cidade: '',
            uf: '',
            telefone: '',
            email: '',
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data.result;
                this.setState({
                id: user.id,
                nome: user.nome,
                cpf: user.cpf,
                cep: user.cep,
                logradouro: user.logradouro,
                bairro: user.bairro,
                cidade: user.cidade,
                uf: user.uf,
                telefone: user.telefone,
                email: user.email,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id, nome: this.state.nome, cpf: this.state.cpf, cep: this.state.cep, logradouro: this.state.logradouro, 
            bairro: this.state.bairro, cidade: this.state.cidade, uf: this.state.uf, telefone: this.state.telefone, email: this.state.email};
        ApiService.editCliente(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/clientes');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Editar Cliente</h2>
                <form>
                <div className="form-group">
                    <label>Nome:</label>
                    <input type="text" placeholder="nome" name="nome" className="form-control" value={this.state.nome} onChange={this.onChange} required/>
                </div>

                <div className="form-group">
                    <label>Cpf:</label>
                    <input type="text" placeholder="Cpf" name="cpf" className="form-control" value={this.state.cpf} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Endereco:</label>
                    <h5>CEP</h5>
                    <input placeholder="CEP" name="cep" className="form-control" value={this.state.cep} onChange={this.onChange}/>
                    <h5>Logradouro</h5>
                    <input placeholder="Logradouro" name="logradouro" className="form-control" value={this.state.logradouro} onChange={this.onChange}/>
                    <h5>Bairro</h5>
                    <input placeholder="Bairro" name="bairro" className="form-control" value={this.state.bairro} onChange={this.onChange}/>
                    <h5>Cidade</h5>
                    <input placeholder="Cidade" name="cidade" className="form-control" value={this.state.cidade} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>UF:</label>
                    <input placeholder="UF" name="uf" className="form-control" value={this.state.uf} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Telefone:</label>
                    <input placeholder="Telefone" name="telefone" className="form-control" value={this.state.telefone} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
            </form>
            </div>
        );
    }
}

export default EditUserComponent;