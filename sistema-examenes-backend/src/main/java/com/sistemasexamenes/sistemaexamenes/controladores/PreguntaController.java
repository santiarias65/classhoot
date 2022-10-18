package com.sistemasexamenes.sistemaexamenes.controladores;

import com.sistemasexamenes.sistemaexamenes.entidades.Examen;
import com.sistemasexamenes.sistemaexamenes.entidades.Pregunta;
import com.sistemasexamenes.sistemaexamenes.servicios.ExamenService;
import com.sistemasexamenes.sistemaexamenes.servicios.PreguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/pregunta")
@CrossOrigin("*")
public class PreguntaController {

    @Autowired
    private PreguntaService preguntaService;

    @Autowired
    private ExamenService examenService;

    @PostMapping("/")
    public ResponseEntity<Pregunta> crearpregunta(@RequestBody Pregunta pregunta){
        return  ResponseEntity.ok(preguntaService.crearPregunta(pregunta));
    }

    @GetMapping("/{preguntaId}")
    public Pregunta obtenerpreguntaId(@PathVariable("preguntaId") Long preguntaId){
        return preguntaService.obtenerPregunta(preguntaId);
    }

    @GetMapping("/")
    public ResponseEntity<?> listarpreguntas(){
        return ResponseEntity.ok(preguntaService.obtenerPreguntas());
    }

    @PutMapping("/")
    public Pregunta actualizarpregunta(@RequestBody Pregunta pregunta){
        return preguntaService.actualizarPregunta(pregunta);
    }

    @DeleteMapping("/{preguntaId}")
    public void eliminarpregunta(@PathVariable("preguntaId") Long idpregunta){
        preguntaService.eliminarPregunta(idpregunta);
    }

    @GetMapping("/examen/preguntas/{idExamen}")
    public ResponseEntity<?> listarpreguntasExamenAdministrador(@PathVariable("idExamen")Long idExamen){
        Examen examen = examenService.obtenerExamen(idExamen);
        Set<Pregunta> preguntas = examen.getPreguntas();
        List listaPreguntas = new ArrayList(preguntas);
        return ResponseEntity.ok(listaPreguntas);
    }
    //el metodo genera las preguntas aleatorias al generar un examen
    /*public void generarPreguntasPresentarExamen(){
        Examen examen = examenService.obtenerExamen(idExamen);
        Set<Pregunta> preguntas = examen.getPreguntas();
        List listaPreguntas = new ArrayList(preguntas);
        Collections.shuffle(listaPreguntas);
        listaPreguntas = listaPreguntas.subList(0,Integer.parseInt(examen.getNumeroPreguntas()));
        return ResponseEntity.ok(listaPreguntas);
    }*/




}
