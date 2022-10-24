package com.sistemasexamenes.sistemaexamenes.servicios.impl;

import com.sistemasexamenes.sistemaexamenes.entidades.Categoria;
import com.sistemasexamenes.sistemaexamenes.repositorios.CategoriaRepository;
import com.sistemasexamenes.sistemaexamenes.servicios.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class CategoriaServiceImpl implements CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Override
    public Categoria crearCategoria(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @Override
    public Categoria actualizarCategoria(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @Override
    public Set<Categoria> obtenerCategorias() {
        return new LinkedHashSet<>(categoriaRepository.findAll());
    }

    @Override
    public Categoria obtenerCategoria(Long idCategoria) {
        return categoriaRepository.findById(idCategoria).get();
    }

    @Override
    public void eliminarCategoria(Long idCategoria) {
        Categoria categoria = obtenerCategoria(idCategoria);
        categoriaRepository.delete(categoria);
    }
}
