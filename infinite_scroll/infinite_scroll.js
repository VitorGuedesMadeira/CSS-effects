const my_container = document.querySelector('#container')

document.addEventListener('scroll', () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      for(let i=1; i<=9; i++) {
        let new_image = document.createElement('img')
        new_image.src = 'https://picsum.photos/200'
        my_container.appendChild(new_image)
      }
    }
  });