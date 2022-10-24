package com.sistemasexamenes.sistemaexamenes.entidades;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "categorias")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCategoria;

    private String titulo;
    private String descripcion;

    @OneToMany(mappedBy = "categoria",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Examen> examenes = new LinkedHashSet<>();

}
