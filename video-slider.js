// Video Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const videoSliderContainer = document.querySelector('.video-slider-container');
    if (!videoSliderContainer) return;
    
    const videos = [
        document.getElementById('video1'),
        document.getElementById('video2'),
        document.getElementById('video3')
    ];
    const slides = document.querySelectorAll('.video-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeBtn = document.getElementById('volumeBtn');
    
    if (videos.length === 0 || slides.length === 0) return;
    
    let currentSlide = 0;
    let isMuted = true;
    
    // Initialize videos
    videos[0].muted = false;
    videos[0].volume = 0.5;
    videos[0].play();
    
    // Function to change slide
    function changeSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Pause current video
        videos[currentSlide].pause();
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Play next video with current volume settings
        videos[currentSlide].currentTime = 0;
        videos[currentSlide].muted = isMuted;
        videos[currentSlide].volume = volumeSlider ? volumeSlider.value : 0.5;
        videos[currentSlide].play();
    }
    
    // Add ended event to videos
    videos.forEach((video, index) => {
        video.addEventListener('ended', () => {
            changeSlide((index + 1) % videos.length);
        });
    });
    
    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            changeSlide(index);
        });
    });
    
    // Volume control
    if (volumeSlider) {
        volumeSlider.addEventListener('input', function() {
            videos[currentSlide].volume = this.value;
            isMuted = (this.value == 0);
            updateVolumeIcon();
        });
    }
    
    if (volumeBtn) {
        volumeBtn.addEventListener('click', function() {
            isMuted = !isMuted;
            videos[currentSlide].muted = isMuted;
            if (!isMuted && videos[currentSlide].volume == 0) {
                videos[currentSlide].volume = 0.5;
                if (volumeSlider) volumeSlider.value = 0.5;
            }
            updateVolumeIcon();
        });
    }
    
    function updateVolumeIcon() {
        if (!volumeBtn) return;
        
        if (isMuted || (volumeSlider && volumeSlider.value == 0)) {
            volumeBtn.className = 'fas fa-volume-mute volume-btn';
        } else if (volumeSlider && volumeSlider.value < 0.5) {
            volumeBtn.className = 'fas fa-volume-down volume-btn';
        } else {
            volumeBtn.className = 'fas fa-volume-up volume-btn';
        }
    }
    
    // Story page video volume control
    const storyVideo = document.getElementById('storyVideo');
    const storyVolumeBtn = document.getElementById('volumeBtn');
    
    if (storyVideo && storyVolumeBtn) {
        storyVideo.volume = 1.0;
        let storyIsMuted = false;
        
        storyVolumeBtn.addEventListener('click', () => {
            storyIsMuted = !storyIsMuted;
            storyVideo.muted = storyIsMuted;
            storyVolumeBtn.innerHTML = storyIsMuted
                ? '<i class="fas fa-volume-mute"></i>'
                : '<i class="fas fa-volume-up"></i>';
        });
    }
});