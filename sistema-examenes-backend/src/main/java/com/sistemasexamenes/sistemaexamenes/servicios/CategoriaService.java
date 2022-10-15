package com.sistemasexamenes.sistemaexamenes.servicios;

import com.sistemasexamenes.sistemaexamenes.entidades.Categoria;

import java.util.Set;

public interface CategoriaService {

    Categoria crearCategoria(Categoria categoria);

    Categoria actualizarCategoria(Categoria categoria);

    Set<Categoria> obtenerCategorias();

    Categoria obtenerCategoria(Long idCategoria);

    void eliminarCategoria(Long idCategoria);
}
