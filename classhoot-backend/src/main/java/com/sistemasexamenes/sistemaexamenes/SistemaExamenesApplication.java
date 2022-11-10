package com.sistemasexamenes.sistemaexamenes;

import com.sistemasexamenes.sistemaexamenes.entidades.Rol;
import com.sistemasexamenes.sistemaexamenes.entidades.Usuario;
import com.sistemasexamenes.sistemaexamenes.entidades.UsuarioRol;
import com.sistemasexamenes.sistemaexamenes.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class SistemaExamenesApplication implements CommandLineRunner {

    @Autowired
    private UsuarioService usuarioService;

    public static void main(String[] args) {
        SpringApplication.run(SistemaExamenesApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        
    }
}
