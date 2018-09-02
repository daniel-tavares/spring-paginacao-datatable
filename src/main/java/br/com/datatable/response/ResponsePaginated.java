package br.com.datatable.response;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class ResponsePaginated<T> {

	protected int draw;
	protected int recordsTotal;
	protected int recordsFiltered;
	protected List<T> data;

	ResponsePaginated(){}
	
	ResponsePaginated(int draw, int recordsTotal, int recordsFiltered,  List<T> data) {
		this.draw=draw;
		this.recordsTotal=recordsTotal;
		this.recordsFiltered=recordsFiltered;
		this.data=data;
	}

	public int getDraw() {
		return draw;
	}

	public void setDraw(int draw) {
		this.draw = draw;
	}

	public int getRecordsTotal() {
		return recordsTotal;
	}

	public void setRecordsTotal(int recordsTotal) {
		this.recordsTotal = recordsTotal;
	}

	public int getRecordsFiltered() {
		return recordsFiltered;
	}

	public void setRecordsFiltered(int recordsFiltered) {
		this.recordsFiltered = recordsFiltered;
	}

	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}

	
	

}
