package com.br.vinicius.cliente.controller;

import com.br.vinicius.cliente.model.ApiResponse;
import com.br.vinicius.cliente.model.Cliente;
import com.br.vinicius.cliente.model.ClienteDto;
import com.br.vinicius.cliente.service.ClienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping
    public ApiResponse<Cliente> saveUser(@RequestBody ClienteDto cliente){
        return new ApiResponse<>(HttpStatus.OK.value(), "User saved successfully.",clienteService.save(cliente));
    }

    @GetMapping
    public ApiResponse<List<Cliente>> listUser(){
        return new ApiResponse<>(HttpStatus.OK.value(), "User list fetched successfully.",clienteService.findAll());
    }

    @GetMapping("/{id}")
    public ApiResponse<Cliente> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.",clienteService.findById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<ClienteDto> update(@RequestBody ClienteDto clienteDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "User updated successfully.",clienteService.update(clienteDto));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id) {
        clienteService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "User deleted successfully.", null);
    }



}
