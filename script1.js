<script>
   // Carousel'ın (Slider'ın) DOM (sayfa) yüklendikten sonra başlatılmasını sağlar.
document.addEventListener('DOMContentLoaded', function () {
    
    var myCarouselElement = document.getElementById('imageSlider');
    
   
    if (myCarouselElement) {
        
        var carousel = new bootstrap.Carousel(myCarouselElement, {
            interval: 4000,  
            pause: 'hover'   
        });
    }
});
    
</script>