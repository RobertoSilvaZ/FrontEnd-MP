(function ($) {
 	'use strict';
     $.fn.extend({ 
		animaImputText: function(obj) { 
			//obtener el objeto de bloque respuesta
			var panel   = $('#panel-result .panel-body');			
			//obtener el contenido del campo de texto
			var text    = obj.val();
			//convertir el contenido en un arreglo
			var textArr = text.split("");
			
			//validar si existen valores repetidos
			var hasDuplicates = $.fn.occurrence(textArr); 
			if(!hasDuplicates) {			
				//limpiar mensaje de error
				obj.parent().find('div.with-errors').html("");
				//limpiar bloque de resultado
				panel.html("");
				//ordenamiento ascendente del contenido numerico
				textArr.sort(function(a, b){return a-b});
				
				//recorrer arreglo de numeros
				$.each(textArr, function(idx, elem) {
					var newEL = $("<span style='padding:10px' class='input-lg'/>").text(elem).css({opacity: 0});
					//agregar contenido al bloque de resultado
					newEL.appendTo(panel);
					//colocar delay para la animación
					newEL.delay(idx * 70);
					//efecto de aparición según opacidad
					newEL.animate({opacity: 1}, 1100);
				})
			} else {
				//mostrar mensaje de valores repetidos
				obj.parent().find('div.with-errors').html("Los números ingresados no deben repetirse.");
				//aplicar estilo de error
				obj.parent().parent().addClass('has-error has-danger');
			}
		},
		occurrence: function(array) {
			//creación de variable de arreglo
			var counts = [];
			//recorrer la variables del parametro
			for(var i = 0; i <= array.length; i++) {
				//validar elemento
				if(counts[array[i]] === undefined) {
					counts[array[i]] = 1;
				} else {
					//retorna verdadero si encontró valor repetido
					return true;
				}
			}
			//retorna falso si no encontró valor repetido
			return false;
		}	
    })
})(jQuery)
