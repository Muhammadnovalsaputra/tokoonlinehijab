let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

// Kode JavaScript yang sudah ada untuk fitur lainnya (misalnya animasi, validasi form, dll.)
console.log('Fungsi lama lainnya berjalan');

// Menambahkan fungsi untuk pengalihan ke WhatsApp
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Menghindari form untuk submit secara default

    // Ambil nilai input nama dan pesan
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    // Menyusun pesan untuk WhatsApp
    var whatsappMessage = `Nama: ${name}%0A%0A${message}`;

    // Ganti nomor WhatsApp Anda di sini (gunakan nomor dalam format internasional tanpa tanda +)
    var phoneNumber = "628569306490"; // Contoh: 628569306490
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Redirect ke WhatsApp
    window.location.href = whatsappUrl;
});
