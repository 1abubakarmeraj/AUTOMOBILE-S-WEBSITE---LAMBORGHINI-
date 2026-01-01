// Car Card Expansion
document.addEventListener('DOMContentLoaded', function() {
    const carCards = document.querySelectorAll('.car-card');
    const expandedView = document.getElementById('expandedView');
    const closeExpanded = document.getElementById('closeExpanded');
    
    if (!expandedView || !closeExpanded) return;
    
    const expandedImage = document.getElementById('expandedImage');
    const expandedTitle = document.getElementById('expandedTitle');
    const expandedDescription = document.getElementById('expandedDescription');
    const expandedSpeed = document.getElementById('expandedSpeed');
    const expandedHorsepower = document.getElementById('expandedHorsepower');
    const expandedCost = document.getElementById('expandedCost');
    const expandedLove = document.getElementById('expandedLove');
    
    // Car data
    const carData = {
        aventador: {
            title: "Aventador SVJ",
            description: "The Aventador SVJ represents the pinnacle of Lamborghini engineering. With a naturally aspirated V12 engine producing 770 horsepower, it accelerates from 0-60 mph in just 2.8 seconds. Its aerodynamic design and advanced technologies make it the ultimate supercar.",
            speed: "Top Speed: 217 mph",
            horsepower: "Horsepower: 770 HP",
            cost: "Starting at: $517,000",
            love: "Loved by: 98% of customers",
            image: "images/1p.jpg"
        },
        huracan: {
            title: "Huracán EVO",
            description: "The Huracán EVO combines extraordinary performance with cutting-edge technology. Its 5.2L V10 engine delivers 640 horsepower, while its aerodynamic design provides exceptional handling and stability at high speeds.",
            speed: "Top Speed: 202 mph",
            horsepower: "Horsepower: 640 HP",
            cost: "Starting at: $261,000",
            love: "Loved by: 96% of customers",
            image: "images/2p.jpg"
        },
        urus: {
            title: "Urus",
            description: "The Urus is the world's first Super Sport Utility Vehicle. With a 4.0L twin-turbo V8 engine producing 650 horsepower, it combines the soul of a super sports car with the functionality of an SUV.",
            speed: "Top Speed: 190 mph",
            horsepower: "Horsepower: 650 HP",
            cost: "Starting at: $218,000",
            love: "Loved by: 95% of customers",
            image: "images/4p.jpg"
        },
        sian: {
            title: "Sián FKP 37",
            description: "The Sián FKP 37 is Lamborghini's first hybrid production car. It features a supercapacitor-based hybrid system that works in conjunction with a 6.5L V12 engine, delivering a combined 819 horsepower.",
            speed: "Top Speed: 217 mph",
            horsepower: "Horsepower: 819 HP",
            cost: "Starting at: $3,600,000",
            love: "Loved by: 97% of customers",
            image: "images/4z.jpg"
        },
        countach: {
            title: "Countach LPI 800-4",
            description: "The Countach LPI 800-4 is a modern reinterpretation of the iconic Countach. It features a hybrid powertrain with a 6.5L V12 engine and a supercapacitor-based system, delivering a total of 803 horsepower.",
            speed: "Top Speed: 221 mph",
            horsepower: "Horsepower: 803 HP",
            cost: "Starting at: $2,640,000",
            love: "Loved by: 99% of customers",
            image: "images/5z.jpg"
        }
    };
    
    // Add click events to car cards
    carCards.forEach(card => {
        card.addEventListener('click', () => {
            const carId = card.getAttribute('data-car');
            const data = carData[carId] || carData.aventador; // Default to aventador if not found
            
            if (expandedImage) expandedImage.src = data.image;
            if (expandedTitle) expandedTitle.textContent = data.title;
            if (expandedDescription) expandedDescription.textContent = data.description;
            if (expandedSpeed) expandedSpeed.textContent = data.speed;
            if (expandedHorsepower) expandedHorsepower.textContent = data.horsepower;
            if (expandedCost) expandedCost.textContent = data.cost;
            if (expandedLove) expandedLove.textContent = data.love;
            
            expandedView.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close expanded view
    closeExpanded.addEventListener('click', () => {
        expandedView.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close when clicking outside content
    expandedView.addEventListener('click', (e) => {
        if (e.target === expandedView) {
            expandedView.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});