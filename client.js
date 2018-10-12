const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');

loadingElement.style.display = 'none';
form.addEventListener('submit', (Event)=> {
    event.preventDefault();
    const formData = new FormData(form)
    const name = formData.get('name');
    const content = formData.get('content');
    
    const mew = {
        name,
        content
    };
    console.log('Mew');
    form.style.display = 'none';
    loadingElement.style.display = '';
})