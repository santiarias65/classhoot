package com.sistemasexamenes.sistemaexamenes.controladores;

import com.sistemasexamenes.sistemaexamenes.entidades.Categoria;
import com.sistemasexamenes.sistemaexamenes.servicios.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categoria")
@CrossOrigin("*")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @PostMapping("/")
    public ResponseEntity<Categoria> crearCategoria(@RequestBody Categoria categoria){
        return  ResponseEntity.ok(categoriaService.crearCategoria(categoria));
    }

    @GetMapping("/{categoriaId}")
    public Categoria obtenerCategoriaId(@PathVariable("categoriaId") Long idCategoria){
        return categoriaService.obtenerCategoria(idCategoria);
    }

    @GetMapping("/")
    public ResponseEntity<?> listarCategorias(){
        return ResponseEntity.ok(categoriaService.obtenerCategorias());
    }

    @PutMapping("/")
    public Categoria actualizarCategoria(@RequestBody Categoria categoria){
        return categoriaService.actualizarCategoria(categoria);
    }

    @DeleteMapping("/{categoriaId}")
    public void eliminarCategoria(@PathVariable("categoriaId") Long idCategoria){
        categoriaService.eliminarCategoria(idCategoria);
    }
}
