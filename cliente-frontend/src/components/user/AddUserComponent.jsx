import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import ViaCep from 'react-via-cep';


class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            nome: '',
            cep: '',
            cpf: '',
            logradouro: '',
            bairro: '',
            cidade: '',
            uf: '',
            telefone: '',
            email: '',
            message: null
            
        }
        this.saveUser = this.saveUser.bind(this);
        this.handleChangeCep = this.handleChangeCep.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
    }

    handleChangeCep(evt) {
        this.setState({ cep: evt.target.value })
      }
      handleSuccess(cepData) {
        console.log(cepData);
      }

    

    saveUser = (e) => {
        e.preventDefault();
        let user = {nome: this.state.nome, cpf: this.state.cpf, logradouro: this.state.logradouro, 
            bairro: this.state.bairro, cidade: this.state.cidade, telefone: this.state.telefone, email: this.state.email};
        ApiService.addCliente(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/clientes');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

        

    render() {
        return(
          <html>
          
          
            <div>

                

<div className="App">
        <ViaCep cep={this.state.cep} onSuccess={this.handleSuccess} lazy>
          { ({ data, loading, error, fetch }) => {
            if (loading) {
              return <p>loading...</p>
            }
            if (error) {
              return <p>error</p>
            }
            if (data) {
              return <div>
                <p>
                  CEP: {data.cep} <br/>
                  Logradouro: {data.logradouro} <br/>
                  bairro: {data.bairro}
                  CIDADE: {data.localidade} <br/>
                  UF: {data.uf} <br/>
                </p>
              </div>
            }
            return <div>
              <input onChange={this.handleChangeCep} value={this.state.cep} placeholder="CEP" type="text"/>
              <button onClick={fetch}>Pesquisar</button>
            </div>
          }}
        </ViaCep>
      </div>

                <h2 className="text-center">Adicionar Cliente</h2>
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
    </html>
        );
    }
    
}

export default AddUserComponent;