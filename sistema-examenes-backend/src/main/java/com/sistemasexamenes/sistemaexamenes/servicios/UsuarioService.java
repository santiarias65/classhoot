package com.sistemasexamenes.sistemaexamenes.servicios;

import com.sistemasexamenes.sistemaexamenes.entidades.Usuario;
import com.sistemasexamenes.sistemaexamenes.entidades.UsuarioRol;

import java.util.Set;

public interface UsuarioService {

    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;

    public Usuario obtenerUsuario(String username);

    public void eliminarUsuario(Long usuarioId);
}
