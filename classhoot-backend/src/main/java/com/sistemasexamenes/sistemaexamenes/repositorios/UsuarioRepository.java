package com.sistemasexamenes.sistemaexamenes.repositorios;

import com.sistemasexamenes.sistemaexamenes.entidades.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Long > {

    public Usuario findByUsername(String username);

}
