package com.sistemasexamenes.sistemaexamenes.entidades;

import javax.persistence.*;

@Entity
public class UsuarioRol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long usuarioRolId;

    @ManyToOne(fetch = FetchType.EAGER)
    private Usuario usuario;

    @ManyToOne
    private Rol rol;

    public UsuarioRol(){}

    public long getUsuarioRolId() {
        return usuarioRolId;
    }

    public void setUsuarioRolId(long usuarioRolId) {
        this.usuarioRolId = usuarioRolId;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }
}
