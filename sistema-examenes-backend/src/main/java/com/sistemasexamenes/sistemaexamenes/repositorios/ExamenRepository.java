package com.sistemasexamenes.sistemaexamenes.repositorios;

import com.sistemasexamenes.sistemaexamenes.entidades.Examen;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamenRepository extends JpaRepository<Examen,Long> {
    
}
