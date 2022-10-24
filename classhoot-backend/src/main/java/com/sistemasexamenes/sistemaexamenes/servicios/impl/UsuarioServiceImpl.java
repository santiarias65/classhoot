package com.sistemasexamenes.sistemaexamenes.servicios.impl;

import com.sistemasexamenes.sistemaexamenes.entidades.Usuario;
import com.sistemasexamenes.sistemaexamenes.entidades.UsuarioRol;
import com.sistemasexamenes.sistemaexamenes.excepciones.UsuarioFoundException;
import com.sistemasexamenes.sistemaexamenes.repositorios.RolRepository;
import com.sistemasexamenes.sistemaexamenes.repositorios.UsuarioRepository;
import com.sistemasexamenes.sistemaexamenes.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private RolRepository rolRepository;


    @Override
    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception {
        Usuario usuarioLocal = usuarioRepository.findByUsername(usuario.getUsername());
        if(usuarioLocal != null){
            System.out.println("El usuario ya existe");
            throw new UsuarioFoundException("El nombre de usuario ya se encuentra en uso!!");
        }else {
            for(UsuarioRol usuarioRol : usuarioRoles){
                rolRepository.save(usuarioRol.getRol());
            }
            usuario.getUsuarioRoles().addAll(usuarioRoles);
            usuarioLocal = usuarioRepository.save(usuario);
        }
        return usuarioLocal;
    }

    @Override
    public Usuario obtenerUsuario(String username) {
        return usuarioRepository.findByUsername(username);
    }

    @Override
    public void eliminarUsuario(Long usuarioId) {
        usuarioRepository.deleteById(usuarioId);
    }

}
