package br.com.datatable.model;

import org.apache.commons.lang3.StringUtils;

import br.com.datatable.util.Mask;

public class Usuario {
	Long id;
	String nome;
	String documento;
	String tipoDocumento;

	public Usuario(Long id, String usuario, String documento, String tipo) {
		this.id = id;
		this.nome = usuario;
		this.documento=documento;
		this.tipoDocumento=tipo;
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

	

	public String getDocumento() {
		return documento;
	}

	public void setDocumento(String documento) {
		this.documento = documento;
	}

	public String getTipoDocumento() {
		return tipoDocumento;
	}

	public void setTipoDocumento(String tipoDocumento) {
		this.tipoDocumento = tipoDocumento;
	}

	
	public String getDocumentoFormatado() {
		if(tipoDocumento.equals("1"))
			return new Mask().formatarString(StringUtils.leftPad(documento,11,'0'), "###.###.###-##");
		else
			return new Mask().formatarString(StringUtils.leftPad("585248200",14,'0'), "###.###.###.###-##");
	}
	
	

}