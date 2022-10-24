package com.sistemasexamenes.sistemaexamenes.entidades;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "roles")
public class Rol {

    @Id
    private long rolId;
    private String nombre;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "rol")
    private Set<UsuarioRol> usuarioRoles = new HashSet<>();

    public Rol(){}

    public long getRolId() {
        return rolId;
    }

    public void setRolId(long rolId) {
        this.rolId = rolId;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Set<UsuarioRol> getUsuarioRoles() {
        return usuarioRoles;
    }

    public void setUsuarioRoles(Set<UsuarioRol> usuarioRoles) {
        this.usuarioRoles = usuarioRoles;
    }
}
