package br.com.datatable.response;

import java.util.List;

import org.springframework.stereotype.Component;

import br.com.datatable.model.Usuario;

@Component
public class ResponsePaginatedUsuarioBuild extends ResponsePaginated<Usuario> {

		public ResponsePaginatedUsuarioBuild draw(int draw) {
			this.setDraw(draw);
			return this;
		}

		public ResponsePaginatedUsuarioBuild recordsTotal(int recordsTotal) {
			this.setRecordsTotal(recordsTotal);
			return this;
		}

		public ResponsePaginatedUsuarioBuild recordsFiltered(int recordsFiltered) {
			this.setRecordsFiltered(recordsFiltered);
			return this;
		}

		public ResponsePaginatedUsuarioBuild data(List<Usuario> data) {
			this.setData(data);
			return this;
		}

		public ResponsePaginated<Usuario> create() {
			return new ResponsePaginated<>(draw, recordsTotal, recordsFiltered, data);
		}
}