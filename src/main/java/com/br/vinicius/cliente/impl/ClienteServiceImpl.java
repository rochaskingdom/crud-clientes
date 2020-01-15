package com.br.vinicius.cliente.impl;

import com.br.vinicius.cliente.dao.ClienteDao;
import com.br.vinicius.cliente.model.Cliente;
import com.br.vinicius.cliente.model.ClienteDto;
import com.br.vinicius.cliente.service.ClienteService;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service(value = "clienteService")
public class ClienteServiceImpl implements ClienteService {
	
	@Autowired
	private ClienteDao clienteDao;

	public List<Cliente> findAll() {
		List<Cliente> list = new ArrayList<>();
		clienteDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(int id) {
		clienteDao.deleteById(id);
	}

	@Override
	public Cliente findOne(String cpf) {
		return clienteDao.findByCpf(cpf);
	}

	@Override
	public Cliente findById(int id) {
		Optional<Cliente> optionalCliente = clienteDao.findById(id);
		return optionalCliente.isPresent() ? optionalCliente.get() : null;
	}

    @Override
    public ClienteDto update(ClienteDto clienteDto) {
        Cliente cliente = findById(clienteDto.getId());
        if(cliente != null) {
            BeanUtils.copyProperties(clienteDto, cliente, "password", "username");
            clienteDao.save(cliente);
        }
        return clienteDto;
    }

    @Override
    public Cliente save(ClienteDto cliente) {
	    Cliente newCliente = new Cliente();
	    newCliente.setNome(cliente.getNome());
	    newCliente.setCpf(cliente.getCpf());
	    newCliente.setCep(cliente.getCep());
	    newCliente.setBairro(cliente.getBairro());
		newCliente.setCidade(cliente.getCidade());
		newCliente.setLogradouro(cliente.getLogradouro());
		newCliente.setUf(cliente.getUf());
		newCliente.setTelefone(cliente.getTelefone());
		newCliente.setEmail(cliente.getEmail());
        return clienteDao.save(newCliente);
    }
}
