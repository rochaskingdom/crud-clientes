package com.br.vinicius.cliente.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.br.vinicius.cliente.model.Cliente;

@Repository
public interface ClienteDao extends CrudRepository<Cliente, Integer> {

    Cliente findByCpf(String cpf);
}
