package com.sistemasexamenes.sistemaexamenes.servicios.impl;
import com.sistemasexamenes.sistemaexamenes.entidades.Examen;
import com.sistemasexamenes.sistemaexamenes.repositorios.ExamenRepository;
import com.sistemasexamenes.sistemaexamenes.servicios.ExamenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class ExamenServiceImpl implements ExamenService {

    @Autowired
    private ExamenRepository examenRepository;

    @Override
    public Examen crearExamen(Examen examen) {
        return examenRepository.save(examen);
    }

    @Override
    public Examen actualizarExamen(Examen examen) {
        return examenRepository.save(examen);
    }

    @Override
    public Set<Examen> obtenerExamenes() {
        return new LinkedHashSet<>(examenRepository.findAll());
    }

    @Override
    public Examen obtenerExamen(Long idExamen) {
        return examenRepository.findById(idExamen).get();
    }

    @Override
    public void eliminarExamen(long idExamen) {
        Examen examen = obtenerExamen(idExamen);
        examenRepository.delete(examen);
    }
}
