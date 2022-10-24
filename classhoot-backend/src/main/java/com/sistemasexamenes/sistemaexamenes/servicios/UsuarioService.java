package com.sistemasexamenes.sistemaexamenes.servicios;

import com.sistemasexamenes.sistemaexamenes.entidades.Usuario;
import com.sistemasexamenes.sistemaexamenes.entidades.UsuarioRol;

import java.util.Set;

public interface UsuarioService {

    Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;

    Usuario obtenerUsuario(String username);

    void eliminarUsuario(Long usuarioId);
}
