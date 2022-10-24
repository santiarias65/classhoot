package com.sistemasexamenes.sistemaexamenes.repositorios;

import com.sistemasexamenes.sistemaexamenes.entidades.Examen;
import com.sistemasexamenes.sistemaexamenes.entidades.Pregunta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface PreguntaRepository extends JpaRepository<Pregunta,Long> {

    Set<Pregunta> findByExamen(Examen examen);
}
