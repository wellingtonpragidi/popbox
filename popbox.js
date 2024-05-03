let popbox = {
    gallery: document.querySelector("#gallery"),
    thumb:   document.querySelectorAll("#gallery img"),
    popbox:  document.querySelector("#popbox"),/*lightbox*/
    image:   this.popbox.getElementsByTagName("img"),
    close:   document.querySelector(".close"),
    prev:    document.querySelector(".prev"),
    next:    document.querySelector(".next"),
    index: 1,
    slides: function(n) {
        if(n > this.image.length) {
            this.index = 1
        }
        if(n < 1) {
            this.index = this.image.length
        }
        for(var i = 0; i < this.image.length; i++) {
            this.image[i].style.display = "none";
        }
        this.image[this.index-1].style.display = "block";

        if(n >= this.image.length) {
            this.next.setAttribute("disabled", "");
        } else { 
            this.next.removeAttribute("disabled");
        }
        if(n <= 1) {
            this.prev.setAttribute("disabled", "");
        } else { 
            this.prev.removeAttribute("disabled");
        }
    },
    current: function(n) {
        this.slides(this.index = n);
    },
    navslide: function(n) {
        this.slides(this.index += n);
    },
    init: function() {
        this.thumb.forEach( elemt => {
            elemt.addEventListener('click', function() {
                popbox.popbox.style.display = "block";
            });
        });
        this.close.addEventListener('click', function() {
            popbox.popbox.style.display = "none";
        });
        this.prev.addEventListener('click', function() {
            popbox.navslide(-1);
        });
        this.next.addEventListener('click', function() {
            popbox.navslide(1);
        });

        this.slides(this.index);
    },
};
popbox.init();