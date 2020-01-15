package com.br.vinicius.cliente.service;

import java.util.List;

import com.br.vinicius.cliente.model.Cliente;
import com.br.vinicius.cliente.model.ClienteDto;

public interface ClienteService {

    Cliente save(ClienteDto cliente);
    List<Cliente> findAll();
    void delete(int id);

    Cliente findOne(String cpf);

    Cliente findById(int id);

    ClienteDto update(ClienteDto clienteDto);
}
