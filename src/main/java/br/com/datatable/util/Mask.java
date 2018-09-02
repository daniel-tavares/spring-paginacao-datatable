package br.com.datatable.util;

import java.text.ParseException;

import javax.swing.text.MaskFormatter;

import org.apache.commons.lang3.StringUtils;

public class Mask {

	public static String formatarString(String texto, String mascara) {

		try {
			MaskFormatter mf = new MaskFormatter(mascara);
			mf.setValueContainsLiteralCharacters(false);
			return mf.valueToString(texto);
		} catch (ParseException e) {
			return null;
		}
	}
	
	
	public static void main(String[] args) {

		System.out.println(new Mask().formatarString(StringUtils.leftPad("585248200",11,'0'), "###.###.###-##"));
	}

}
