package com.sistemasexamenes.sistemaexamenes.servicios.impl;

import com.sistemasexamenes.sistemaexamenes.entidades.Examen;
import com.sistemasexamenes.sistemaexamenes.entidades.Pregunta;
import com.sistemasexamenes.sistemaexamenes.repositorios.PreguntaRepository;
import com.sistemasexamenes.sistemaexamenes.servicios.PreguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class PreguntaServiceImpl implements PreguntaService {

    @Autowired
    private PreguntaRepository preguntaRepository;

    @Override
    public Pregunta crearPregunta(Pregunta pregunta) {
        return preguntaRepository.save(pregunta);
    }

    @Override
    public Pregunta actualizarPregunta(Pregunta pregunta) {
        return preguntaRepository.save(pregunta);
    }

    @Override
    public Set<Pregunta> obtenerPreguntas() {
        return (Set<Pregunta>)(preguntaRepository.findAll());
    }

    @Override
    public Pregunta obtenerPregunta(Long idPregunta) {
        return preguntaRepository.findById(idPregunta).get();
    }

    @Override
    public Set<Pregunta> obtenerPreguntasExamen(Examen examen) {
        return preguntaRepository.findByExamen(examen);
    }

    @Override
    public void eliminarPregunta(Long idPregunta) {
        Pregunta pregunta = obtenerPregunta(idPregunta);
        preguntaRepository.delete(pregunta);
    }
}
