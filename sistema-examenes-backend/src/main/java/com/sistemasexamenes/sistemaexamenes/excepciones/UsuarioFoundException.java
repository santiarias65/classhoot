package com.sistemasexamenes.sistemaexamenes.excepciones;

public class UsuarioFoundException extends Exception{

    public UsuarioFoundException(){
        super("El nombre de usuario ya se encuentra en uso!!");
    }

    public UsuarioFoundException(String mensaje){
        super(mensaje);
    }
}
