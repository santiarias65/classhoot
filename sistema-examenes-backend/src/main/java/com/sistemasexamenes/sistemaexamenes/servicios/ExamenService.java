package com.sistemasexamenes.sistemaexamenes.servicios;

import com.sistemasexamenes.sistemaexamenes.entidades.Examen;

import java.util.Set;

public interface ExamenService {

    Examen crearExamen(Examen examen);

    Examen actualizarExamen(Examen examen);

    Set<Examen> obtenerExamenes();

    Examen obtenerExamen(Long idExamen);

    void eliminarExamen(long idExamen);
}
