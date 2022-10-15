package com.sistemasexamenes.sistemaexamenes.controladores;

import com.sistemasexamenes.sistemaexamenes.entidades.Examen;
import com.sistemasexamenes.sistemaexamenes.servicios.ExamenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/examen")
@CrossOrigin("*")
public class ExamenController {

    @Autowired
    private ExamenService examenService;


    @PostMapping("/")
    public ResponseEntity<Examen> crearExamen(@RequestBody Examen examen){
        return  ResponseEntity.ok(examenService.crearExamen(examen));
    }

    @GetMapping("/{examenId}")
    public Examen obtenerExamenId(@PathVariable("examenId") Long idExamen){
        return examenService.obtenerExamen(idExamen);
    }

    @GetMapping("/")
    public ResponseEntity<?> listarExamenes(){
        return ResponseEntity.ok(examenService.obtenerExamenes());
    }

    @PutMapping("/")
    public Examen actualizarexamen(@RequestBody Examen examen){
        return examenService.actualizarExamen(examen);
    }

    @DeleteMapping("/{examenId}")
    public void eliminarexamen(@PathVariable("examenId") Long idexamen){
        examenService.eliminarExamen(idexamen);
    }
}
