package com.sistemasexamenes.sistemaexamenes.repositorios;

import com.sistemasexamenes.sistemaexamenes.entidades.Categoria;
import com.sistemasexamenes.sistemaexamenes.entidades.Examen;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExamenRepository extends JpaRepository<Examen,Long> {


    List<Examen> findByCategoria(Categoria categoria);

    List<Examen> findByActivo(boolean estado);

    List<Examen> findByCategoriaAndActivo(Categoria categoria,boolean estado);
}
