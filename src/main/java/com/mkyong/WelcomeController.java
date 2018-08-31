package com.mkyong;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WelcomeController {

	// inject via application.properties
	@Value("${welcome.message:test}")
	private String message = "Hello World";

	@RequestMapping("/")
	public String welcome(Map<String, Object> model) {
		model.put("message", this.message);
		return "welcome";
	}

	@RequestMapping(value="/listagem", method = RequestMethod.GET)
	public String listagem() {
         return "list";	
	}

	@ResponseBody
	@RequestMapping(value="/listar", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> welcome(@RequestParam(value="iDisplayStart", defaultValue="0") int iDisplayStart,@RequestParam(value="iDisplayLength", defaultValue="3") int iDisplayLength) {
        Map<String,List<Usuario>> result = new HashMap<>();
		result.put("data", listaUsuario(iDisplayStart, iDisplayLength));
		return new ResponseEntity<>(result, HttpStatus.OK);
	}
	

	private List<Usuario> listaUsuario(int firstResult, int maxResult){
		
		List<Usuario> usuarios=java.util.Arrays.asList(
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
		List<Usuario> newusuarios=new ArrayList<Usuario>();
		
		for(int i=firstResult; i<(firstResult+maxResult); i++)
			newusuarios.add(usuarios.get(i));
		
		return newusuarios;
	}
	

}




class Usuario{
	Long id;
	String nome;
	
	public Usuario(Long id, String usuario) {
		this.id=id;
		this.nome=usuario;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	
	
}