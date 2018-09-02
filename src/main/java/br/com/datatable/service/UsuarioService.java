package br.com.datatable.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import br.com.datatable.model.Usuario;

@Service
public class UsuarioService {
	
	List<Usuario> usuarios;
	
	public UsuarioService(){
		usuarios=java.util.Arrays.asList(
				new Usuario(1l,"nome1"),
				new Usuario(2l,"nome2"),
				new Usuario(3l,"nome3"),
				new Usuario(4l,"nome4"),
				new Usuario(5l,"nome5"),
				new Usuario(6l,"nome6"),
				new Usuario(7l,"nome7"),
				new Usuario(8l,"nome8"),
				new Usuario(9l,"nome9"),
				new Usuario(10l,"nome10"),
				new Usuario(11l,"nome11"),
				new Usuario(12l,"nome12"),
				new Usuario(13l,"nome13"),
				new Usuario(14l,"nome14"),
				new Usuario(15l,"nome15"),
				new Usuario(16l,"nome16"),
				new Usuario(17l,"nome17"),
				new Usuario(18l,"nome18"),
				new Usuario(19l,"nome19"),
				new Usuario(20l,"nome20"));
	}
	
	
	public List<Usuario> buscarUsuarios(int firstResult, int maxResult,String sSearch){
       return (!StringUtils.isEmpty(sSearch))? buscarUsuarioPorFiltro(sSearch): buscarUsuarioPorPagina(firstResult,maxResult);  
	}


   	private List<Usuario> buscarUsuarioPorFiltro(String sSearch) {
   		List<Usuario> newusuarios=new ArrayList<>();
   		for (Usuario usuario : usuarios) {
   			if(usuario.getNome().equals(sSearch)){
   				newusuarios.add(usuario);
   			}
   		}
   		return newusuarios; 
   	}

   	
	
    public List<Usuario> buscarUsuarioPorPagina(int firstResult, int maxResult) {
    	List<Usuario> newusuarios=new ArrayList<>();
    	for(int i=firstResult; i<(firstResult+maxResult); i++)
			 if(i<usuarios.size())
			     newusuarios.add(usuarios.get(i));
    	
    	return newusuarios;
    }
    
    
    
    public Integer buscarTotalUsuarios(){
    	return usuarios.size();
    }

	public List<Usuario> getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(List<Usuario> usuarios) {
		this.usuarios = usuarios;
	}
	
	
	
}