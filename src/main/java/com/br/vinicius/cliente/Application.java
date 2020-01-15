package com.br.vinicius.cliente;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.br.vinicius.cliente.dao.ClienteDao;
import com.br.vinicius.cliente.model.Cliente;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner init(ClienteDao clienteDao){
        return args -> {
            Cliente cliente1 = new Cliente();
            cliente1.setNome("Vinicius");
            cliente1.setCpf("05016062170");
            cliente1.setCep("73025043");
            cliente1.setBairro("Sobradinho");
            cliente1.setCidade("Brasilia");
            cliente1.setLogradouro("Quadra 4 conjunto c");
            cliente1.setUf("DF");
            cliente1.setTelefone("61984694958");
            cliente1.setEmail("vinicusr.rocha@outlook.com");
            clienteDao.save(cliente1);

            Cliente cliente2 = new Cliente();
            cliente2.setNome("Joao");
            cliente2.setCpf("18016062110");
            cliente2.setCep("74025043");
            cliente2.setBairro("Sobradinho");
            cliente2.setCidade("Brasilia");
            cliente2.setLogradouro("Quadra 4 conjunto c");
            cliente2.setUf("DF");
            cliente2.setTelefone("61984694752");
            cliente2.setEmail("joao@outlook.com");
            clienteDao.save(cliente2);
        };
    }

}
