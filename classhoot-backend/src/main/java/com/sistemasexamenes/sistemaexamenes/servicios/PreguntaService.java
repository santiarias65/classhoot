package com.sistemasexamenes.sistemaexamenes.servicios;

import com.sistemasexamenes.sistemaexamenes.entidades.Examen;
import com.sistemasexamenes.sistemaexamenes.entidades.Pregunta;

import java.util.Set;

public interface PreguntaService {

    Pregunta crearPregunta(Pregunta pregunta);

    Pregunta actualizarPregunta(Pregunta pregunta);

    Set<Pregunta> obtenerPreguntas();

    Pregunta obtenerPregunta(Long idPregunta);

    Set<Pregunta> obtenerPreguntasExamen(Examen examen);

    void eliminarPregunta(Long idPregunta);
}
