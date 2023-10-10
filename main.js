const faqsListItems = document.querySelectorAll('#faq li');

faqsListItems.forEach(event => {
    event.addEventListener('click', e => {
        faqsListItems.forEach(item => {
            item.classList.remove('active');
        });

      const li  = e.target.parentElement.parentElement;
      li.classList.toggle('active');
    })
    
})


