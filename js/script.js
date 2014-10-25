$(document).ready(function(){
	$('.base-left-top li').click(function(){
		$(this).toggleClass('blt-active');
	});
/*----------------------------------------*/
	$('.base-left-top-show-bt').click(function(e){
		e.preventDefault();
		if ($('.base-left-top-hidden').is(':visible')) {
			$('.base-left-top-hidden').slideUp();
			$(this).text('развернуть');
		} else {
			$('.base-left-top-hidden').slideDown();
			$(this).text('свернуть');
		}
	});
/*----------------------------------------*/
	$('.cloud').bind({
      mouseover: function() {
      	$(this).addClass('active-cl');      	
	  },
      mouseout: function() {
      	$(this).removeClass('active-cl');      	
      }
    });
/*----------------------------------------*/
	$('.favor-bt').click(function(e){
		e.preventDefault();
		if ($(this).hasClass('favor-bt-active')) {
			$(this).removeClass('favor-bt-active')
			$(this).find('ins').text('в избранное');
		} else {
			$(this).addClass('favor-bt-active')
			$(this).find('ins').text('в избранном');
		}
	});
/*----------------------------------------*/
	//select all the a tag with name equal to modal
	$('a[name=modal]').click(function(e) {
		//Cancel the link behavior
		e.preventDefault();
		//Get the A tag
		var id = $(this).attr('href');
	
		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		
		//transition effect		
		$('#mask').fadeIn(1000);	
		$('#mask').fadeTo("fast");	
	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
              
		//Set the popup window to center
		
	
		//transition effect
		$(id).fadeIn(500); 
	
	});
	
	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		$('#mask, .window').hide();
	});		
	
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});
/*----------------------------------------*/

	$('.event-block-bottom > a').click(function(e){
		e.preventDefault();
		if ($(this).parent().parent().find(".event-block-hidden").is(':visible')) {
			$(this).parent().parent().find(".event-block-hidden").attr('class', 'event-block-hidden1');
			$(this).text('Cвернуть комметрарии');
		} else {
			$(this).parent().parent().find(".event-block-hidden1").attr('class', 'event-block-hidden');
			$(this).text('Развернуть комметрарии');
		}
	});
/*-------------custom-form----------------*/
//Reset form
	// Вешаем событие клика по кнопке сброса
	$('.reset-form').click(function() {
		// Устанавливаем пустое значение в атрибут value для всех инпутов
		$('.customForm').find('input').val('');
		
		// Убираем атрибут checked и класс активности у чекбоксов
		$('.customForm').find('input:checked').removeAttr('checked');
		$('.customForm').find('.check').removeClass('active');
		
		// Убираем класс активности у радио переключателей
		$('.customForm').find('.radio').removeClass('active');
		
		// Устанавливаем пустое значение в атрибут value для всех textarea
		$('.customForm').find('textarea').val('');
		
		// И для открывалки селекта возвращаем начальное значение
		$('.customForm').find('.slct').html('Выберите Ваше лучшее качество:');
	});
	
	// = Load
	// отслеживаем изменение инпута file
	$('#file').change(function(){
		// Если файл прикрепили то заносим значение value в переменную
		var fileResult = $(this).val();
		// И дальше передаем значение в инпут который под загрузчиком
		$(this).parent().find('.fileLoad').find('input').val(fileResult);
	});

	/* Добавляем новый класс кнопке если инпут файл получил фокус */
	$('#file').hover(function(){
		$(this).parent().find('button').addClass('button-hover');
	}, function(){
		$(this).parent().find('button').removeClass('button-hover');
	});
	
	// Checkbox
	// Отслеживаем событие клика по диву с классом check
	$('.checkboxes').find('.check').click(function(){
		// Пишем условие: если вложенный в див чекбокс отмечен
		if( $(this).find('input').is(':checked') ) {
			// то снимаем активность с дива
			$(this).removeClass('active');
			// и удаляем атрибут checked (делаем чекбокс не отмеченным)
			$(this).find('input').removeAttr('checked');
		
		// если же чекбокс не отмечен, то
		} else {
			// добавляем класс активности диву
			$(this).addClass('active');
			// добавляем атрибут checked чекбоксу
			$(this).find('input').attr('checked', true);
		}
	});
	// Select
		$(".select").find(".slct").each(function(){
		$(this).click(function(){
		$(".transport-block-right-top .slct").removeClass("active");
		$(".transport-block-right-top .drop").css({'display':'none'});
		/* Заносим выпадающий список в переменную */
		var dropBlock = $(this).parent().find(".drop");

		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock.is(":hidden") ) {
		dropBlock.slideDown();

		/* Выделяем ссылку открывающую select */
		$(this).addClass("active");

		/* Работаем с событием клика по элементам выпадающего списка */
		$(".drop").find("li").click(function(){

		/* Заносим в переменную HTML код элемента
		списка по которому кликнули */
		var selectResult = $(this).html();

		/* Находим наш скрытый инпут и передаем в него
		значение из переменной selectResult */
		$(this).parent().parent().find("input").val(selectResult);

		/* Передаем значение переменной selectResult в ссылку которая
		открывает наш выпадающий список и удаляем активность */
		$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

		/* Скрываем выпадающий блок */
		dropBlock.hide();
		});

		/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
		$(this).removeClass("active");
		dropBlock.hide();
		}

		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
		});
		});	

	// Select
		$(".select2").find(".slct2").each(function(){
		$(this).click(function(){
		$(".transport-block-right-top .slct2").removeClass("active");
		$(".transport-block-right-top .drop2").css({'display':'none'});
		/* Заносим выпадающий список в переменную */
		var dropBlock = $(this).parent().find(".drop2");

		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock.is(":hidden") ) {
		dropBlock.slideDown();

		/* Выделяем ссылку открывающую select */
		$(this).addClass("active");

		/* Работаем с событием клика по элементам выпадающего списка */
		$(".drop2").find("li").click(function(){

		/* Заносим в переменную HTML код элемента
		списка по которому кликнули */
		var selectResult = $(this).html();

		/* Находим наш скрытый инпут и передаем в него
		значение из переменной selectResult */
		$(this).parent().parent().find("input").val(selectResult);

		/* Передаем значение переменной selectResult в ссылку которая
		открывает наш выпадающий список и удаляем активность */
		$(this).parent().parent().find('.slct2').removeClass('active').html(selectResult);

		/* Скрываем выпадающий блок */
		dropBlock.hide();
		});

		/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
		$(this).removeClass("active");
		dropBlock.hide();
		}

		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
		});
		});	
		
	// RadioButton
	$('.radioblock').find('.radio').click(function(){
		var valueRadio = $(this).html();
		$(this).parent().find('.radio').removeClass('active');
		$(this).addClass('active');
		$(this).parent().find('input').val(valueRadio);
	});
/*----------------------------------------*/
	$(function(){
	  $(document).click(function(event) {
	    if ($(event.target).closest(".drop").length) return;
	    $(".drop").hide();
	    $(".slct.active").removeClass("active");
	    event.stopPropagation();
	  });
	});
/*------------search-------------*/
   $('.focus input').bind({
      focusin: function() {      	
        $('.hid').css('display', 'block');       
      },
      focusout: function() {      	
        $('.hid').css('display', 'none');        
      }
    });

/*----------------------------------------*/			
});