document.addEventListener('DOMContentLoaded', function () {

    // showing and hiding elements on the page

    var menu = document.querySelector('.menu > li:first-child');
    var submenu = document.querySelector('#submenu');
    var img1 = document.querySelector('.img1');
    var img2 = document.querySelector('.img2');


    function showSubmenu (event) {
        submenu.style.display = 'block';
    }

    function hideSubmenu (event) {
        submenu.style.display = 'none';
    }

    menu.addEventListener('mouseover', showSubmenu);
    menu.addEventListener('mouseout', hideSubmenu);

    function hideBlock (event) {
        this.firstElementChild.style.display = 'none';
    }

    function showBlock (event) {
        this.firstElementChild.style.display = 'block';
    }
    
    img1.addEventListener('mouseover', hideBlock);
    img1.addEventListener('mouseout', showBlock);
    img2.addEventListener('mouseover', hideBlock);
    img2.addEventListener('mouseout', showBlock);

    // slider

    var prevBtn = document.querySelector('#prevBtn');
    var nextBtn = document.querySelector('#nextBtn');
    var slider = document.querySelector('.slider');
    var index = 0;
    var lis = document.querySelectorAll('.slider > li');
    console.log(lis);


    lis[index].classList.add('visible');

    prevBtn.addEventListener('click', function (event) {
        lis[index].classList.remove('visible');
        index--;
        if (index < 0) {
            index = lis.length-1;
        }
        lis[index].classList.add('visible');
    });


    nextBtn.addEventListener('click', function (event) {
        lis[index].classList.remove('visible');
        index++;
        if (index >= lis.length) {
            index = 0;
        }
        lis[index].classList.add('visible');
    });


});