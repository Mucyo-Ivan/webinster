// For Navbar collapse
const navButton = document.querySelector('header button');

navButton.addEventListener('click', function(){
    const navbarItem = document.querySelector('header nav');
    const buttonIcon = document.querySelector('.brand button span');

    navbarItem.classList.toggle('show');
    
    if(navbarItem.getAttribute('class') == 'show'){
        buttonIcon.style.transform = 'rotate(90deg)';
        this.style.backgroundColor = '#eee';
        this.style.boxShadow = 'none';
    } else {
        buttonIcon.style.transform = 'rotate(-90deg)';
        this.style.backgroundColor = '#ffffff';
        this.style.boxShadow = '0 0 3px rgba(0, 0, 0, 0.2)';
    }
})


// Scroll Navigation
const articles = document.querySelectorAll('.article');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', function() {
    let result = '';
    
    articles.forEach( article => {
        const articleTop = article.offsetTop;
        const articleHeight = article.clientHeight;

        if (window.pageYOffset >= (articleTop - articleHeight /4)) {
            result = article.getAttribute('data-scroll');
        }

    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.dataset.target == result){
            li.classList.add('active');
        }
    })

    playEfectScroll(this.pageYOffset);
})

// Efect
window.addEventListener('load', () => {
    const leftRotate = document.querySelector('.left-rotate');
    const rightRotate = document.querySelector('.right-rotate');

    leftRotate.classList.add('play-rotate');
    rightRotate.classList.add('play-rotate');
})


function playEfectScroll(data){
    const clientArticle = document.querySelector('.client').offsetTop;
    const clients = document.querySelectorAll('.client img');
    // Client
    if(data > (clientArticle - (data / 8) )){
        clients.forEach(function(client, i) {
            setTimeout(function(){
                client.classList.add('show-img');
            }, 300 * (i + 1));
        })
    }
}