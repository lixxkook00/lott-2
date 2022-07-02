const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    $('.soft-menu').classList.toggle('open')
    $('.soft-menu__list').classList.toggle('open')
}

$('.soft-menu__list').onclick = (e) => {
    e.stopPropagation()
}

$$('.soft-menu__item').forEach((item) => {
    // item.childNodes[1].PreventDefault;
    item.onclick = () => {
        let dataAddress = item.childNodes[1].getAttribute("data-address");
        toggleNavMobile()
    };
});


// SLIDER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 1,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// HANDLE SHOW MODAL MODAL

const videoContent = [
    {
        title: "Bước 1. Đăng ký tài khoản",
        urlVideo:"https://www.youtube.com/embed/pFLl-4zz0AE"
    },
    {
        title: "Bước 2. Đăng nhập tài khoản",
        urlVideo:"https://www.youtube.com/embed/JjOI_dSumAQ"
    },
    {
        title: "Bước 3. Chuyển điểm vào tài khoản",
        urlVideo:"https://www.youtube.com/embed/ZJ6Z0ZloH9g"
    },
    {
        title: "Bước 4. Cách nạp và rút",
        urlVideo:"https://www.youtube.com/embed/HHQrklSmLW8"
    },
    {
        title: "Bước 5. Cách tra cứu số may mắn",
        urlVideo:"https://www.youtube.com/embed/0Kio6qdElTg"
    },
    {
        title: "Bước 6. Mua vé",
        urlVideo:"https://www.youtube.com/embed/hk5KVY8jfVo"
    },
    {
        title: "Bước 7. Đổi mật khẩu (nếu cần)",
        urlVideo:"https://www.youtube.com/embed/zbMe4aW382Q"
    }
    
]

$$('.video-icon').forEach((item) => {
    // item.childNodes[1].PreventDefault;
    // item.onclick = () => {
    //     let videoData = videoContent[item.getAttribute("data-video")];
    //     console.log(videoData);
    //     $('.modal-content').innerHTML = (
    //         `
    //            <div class="modal-header">
    //                 <h5 class="modal-title" id="exampleModalLabel">
    //                     ${videoData.title}
    //                 </h5>
    //                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //             </div>
    //             <div class="modal-body centering">
    //                <div class="video-content">
    //                     <iframe width="100%" src="${videoData.urlVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //                 </div>
    //             </div>
    //             <div class="modal-footer">
    //                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
    //                     Đóng
    //                 </button>
    //             </div> 
    //         `
    //     )   
    // };

    item.addEventListener("mouseenter", function( event ) {
        let videoData = videoContent[item.getAttribute("data-video")];

        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
            keyboard: false
        })

        myModal.show()

        $('.modal-content').innerHTML = (
            `
               <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        ${videoData.title}
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body centering">
                   <div class="video-content">
                        <iframe width="100%" src="${videoData.urlVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                </div> 
            `
        )   
    })
});