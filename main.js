$(document).ready(function() {
    // Quando o documento estiver pronto, adicione um evento de clique ao elemento com ID 'menu'
    $('#menu').click(function() {
      // Adiciona ou remove a classe 'fa-times' ao elemento clicado (menu)
      $(this).toggleClass('fa-times');
      // Adiciona ou remove a classe 'toggle' ao elemento 'header'
      $('header').toggleClass('toggle');
    });
  
    // Adiciona eventos de scroll e load à janela
    $(window).on('scroll load', function() {
      // Remove a classe 'fa-times' do elemento 'menu'
      $('#menu').removeClass('fa-times');
      // Remove a classe 'toggle' do elemento 'header'
      $('header').removeClass('toggle');
  
      // Verifica se a posição de rolagem é maior que 0
      if ($(window).scrollTop() > 0) {
        // Se a posição de rolagem for maior que 0, mostra o elemento com classe 'top'
        $('.top').show();
      } else {
        // Caso contrário, esconde o elemento com classe 'top'
        $('.top').hide();
      }
    });
  
    // Adiciona um evento de clique a todos os links com atributo 'href' que contém '#'
    $('a[href*="#"]').on('click', function(e) {
      // Impede o comportamento padrão do link
      e.preventDefault();
  
      // Anima a rolagem do documento para a posição do elemento referenciado pelo atributo 'href'
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
      }, 500, 'linear');
    });
  });
  