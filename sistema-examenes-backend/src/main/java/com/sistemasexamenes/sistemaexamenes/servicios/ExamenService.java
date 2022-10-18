package com.sistemasexamenes.sistemaexamenes.servicios;

import com.sistemasexamenes.sistemaexamenes.entidades.Categoria;
import com.sistemasexamenes.sistemaexamenes.entidades.Examen;

import java.util.List;
import java.util.Set;

public interface ExamenService {

    Examen crearExamen(Examen examen);

    Examen actualizarExamen(Examen examen);

    Set<Examen> obtenerExamenes();

    Examen obtenerExamen(Long idExamen);

    void eliminarExamen(long idExamen);

    List<Examen> listarExamenesPorCategoria(Categoria categoria);

    List<Examen> obtenerExamenesActivos();

    List<Examen> obtenerActivosCategoria(Categoria categoria);
}
