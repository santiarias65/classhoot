package com.sistemasexamenes.sistemaexamenes.entidades;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "preguntas")
public class Pregunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPregunta;

    @Column(length = 5000)
    private String contenido;
    private String imagen;
    private String opcion1;
    private String opcion2;
    private String opcion3;
    private String opcion4;
    private String respuesta;

    @ManyToOne(fetch = FetchType.EAGER)
    private Examen examen;
}
