window.addEventListener("DOMContentLoaded", () => { 
    const openModal = document.querySelector("[data-open-modal]"); 
    const closeModal = document.querySelector("[data-close-modal]"); 
    const modal = document.querySelector("[data-modal]"); 
   
    function toggleModal() { 
      modal.classList.toggle("is-hidden"); 
      document.body.classList.toggle("no-scroll"); 
    } 
   
    openModal.addEventListener("click", toggleModal); 
    closeModal.addEventListener("click", toggleModal); 
  });

  AOS.init();