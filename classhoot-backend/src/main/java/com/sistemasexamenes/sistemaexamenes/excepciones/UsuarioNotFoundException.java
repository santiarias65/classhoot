package com.sistemasexamenes.sistemaexamenes.excepciones;

public class UsuarioNotFoundException extends Exception{

    public UsuarioNotFoundException(){
        super("El username NO se encuentra en uso");
    }

    public  UsuarioNotFoundException(String mensaje){
        super(mensaje);
    }
}
