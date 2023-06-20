

	// функция для показа модального окна
	function showModal(modalId) {
		var modal = document.getElementById(modalId);
		modal.style.display = "block";
	}

	// функция для скрытия модального окна
	function hideModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
   
  }
  

// Получаем все ссылки в меню
const links = document.querySelectorAll('.nav-link');

// Добавляем обработчик события на изменение хэша
window.addEventListener('hashchange', () => {
  // Получаем значение хэша без символа #
  const hash = window.location.hash.substr(1);
  // Итерируемся по всем ссылкам в меню
  links.forEach(link => {
    // Если значение атрибута href ссылки соответствует значению хэша, то добавляем класс active
    if (link.getAttribute('href') === `#${hash}`) {
      link.classList.add('active');
    } else {
      // Иначе удаляем класс active
      link.classList.remove('active');
    }
  });
});



var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarTogglerIcon = navbarToggler.querySelector('.navbar-toggler-icon');
  var navbarTogglerIconClose = navbarToggler.querySelector('.navbar-toggler-close');

  navbarToggler.addEventListener('click', function() {
    navbarTogglerIcon.classList.toggle('d-none');
    navbarTogglerIconClose.classList.toggle('d-none');
  });




  document.addEventListener("DOMContentLoaded", function() {
    // Получение ссылок и кнопки меню
    var links = document.querySelectorAll(".navbar-nav .nav-link");
    var menuButton = document.querySelector(".navbar-toggler");

    // Перебор ссылок и добавление обработчика события
    links.forEach(function(link) {
      link.addEventListener("click", function() {
        // Закрытие меню
        menuButton.click();
      });
    });
  });

  function openModalHero() {
    document.getElementById("modalHero").style.display = "block";
  }
  
  // Функція, яка закриває модальне вікно
  function closeModalHero() {
    document.getElementById("modalHero").style.display = "none";
  }

  function openModalCorporative() {
    document.getElementById("formConsultation").style.display = "block";
  }
  
  // Функція, яка закриває модальне вікно
  function closeModalCorporative() {
    document.getElementById("formConsultation").style.display = "none";
  }

// ----------------------------

  function openModal() {
    document.getElementById("formmodal3").style.display = "block";
  }
  
  // Функція, яка закриває модальне вікно
  function closeModal() {
    document.getElementById("formmodal3").style.display = "none";
  }
// -------------------------
  
  function openModal() {
    document.getElementById("modalConsultation4").style.display = "block";
  }
  
  // Функція, яка закриває модальне вікно
  function closeModal() {
    document.getElementById("modalConsultation4").style.display = "none";
  }
// -----------------------
  function openModal() {
    document.getElementById("modalConsultation5").style.display = "block";
  }
  
  // Функція, яка закриває модальне вікно
  function closeModal() {
    document.getElementById("modalConsultation5").style.display = "none";
  }
// ------------------------------
  function openModal() {
    document.getElementById("modalConsultation6").style.display = "block";
  }
  
  // Функція, яка закриває модальне вікно
  function closeModal() {
    document.getElementById("modalConsultation6").style.display = "none";
  }
// ---------------------------
  function openModal() {
    document.getElementById("modalConsultation7").style.display = "block";
  }
  
  // Функція, яка закриває модальне вікно
  function closeModal() {
    document.getElementById("modalConsultation7").style.display = "none";
  }

  // -------------------------
  function openModal() {
    document.getElementById("modalConsultation8").style.display = "block";
  }
  
  // Функція, яка закриває модальне вікно
  function closeModal() {
    document.getElementById("modalConsultation8").style.display = "none";
  }
// --------------------------
  function openModal() {
    document.getElementById("modalConsultation9").style.display = "block";
  }
  
  // Функція, яка закриває модальне вікно
  function closeModal() {
    document.getElementById("modalConsultation9").style.display = "none";
  }