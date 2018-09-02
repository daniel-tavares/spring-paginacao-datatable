package br.com.datatable.model;

public class Usuario {
	Long id;
	String nome;

	public Usuario(Long id, String usuario) {
		this.id = id;
		this.nome = usuario;
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