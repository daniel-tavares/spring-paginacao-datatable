package br.com.datatable.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.datatable.model.Usuario;
import br.com.datatable.response.ResponsePaginated;
import br.com.datatable.response.ResponsePaginatedUsuarioBuild;
import br.com.datatable.service.UsuarioService;

@Controller
public class WelcomeController {

	@Autowired
	ResponsePaginatedUsuarioBuild responsePaginaTedUsuario;
	
	@Autowired
	UsuarioService usuarioService;
	
	@RequestMapping(value="/listagem", method = RequestMethod.GET)
	public String listagem() {
         return "list";	
	}

	@ResponseBody
	@RequestMapping(value="/listar", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ResponsePaginated<?>> welcome(@RequestParam(value="iDisplayStart") int iDisplayStart,
														@RequestParam(value="iDisplayLength") int iDisplayLength,
														@RequestParam(value="sEcho") int sEcho,
														@RequestParam(value="sSearch") String sSearch) {
		
		Integer totalRegistros=usuarioService.buscarTotalUsuarios();
		
		ResponsePaginated<Usuario> result=responsePaginaTedUsuario
				.draw(sEcho)
				.recordsFiltered(totalRegistros)
				.recordsTotal(totalRegistros)
				.data(usuarioService.buscarUsuarios(iDisplayStart, iDisplayLength, sSearch)).create();
		return new ResponseEntity<>(result, HttpStatus.OK);
	}
	
}