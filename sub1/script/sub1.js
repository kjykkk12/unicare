$(function () {

    // 메인 슬라이드 
    $(".h_slide").slick({
        autoplay: true,
        autoplaySpeed: 3000
    });

    // 햄버거바 
    $(".h_btn").click(function () {
        $(".h_menu").stop().animate({ right: '0' }, 1000);
    });

    $(".close").click(function () {
        $(".h_menu").stop().animate({ right: '-100%' }, 1000);
    });

    // // submenu 
    $("#menu .btn button").on({
        mouseover: function (e) {
            $(e.target).css({ borderTop: '2px solid #ffc410' });
        },
        mouseout: function (e) {
            $(e.target).css({ borderTop: 'none' });
        }
    });

    // 
});



// 메뉴 
const menu = [
    {
        id: 1,
        title: "하이포 알러제닉 케어천+",
        category: "사료",
        price: 27000,
        img: '../sub1/img/menu1.png',
        desc: `중증 식이 민감성 및 아토피`
    },
    {
        id: 2,
        title: "유리너리 트랙트",
        category: "사료",
        price: 27000,
        img: '../sub1/img/menu2.png',
        desc: `방광 결석 건강 관리`
    },
    {
        id: 3,
        title: "하이포 알러제닉 퓨어프로틴+",
        category: "사료",
        price: 27000,
        img: '../sub1/img/menu3.png',
        desc: `식이 민감성 관리`
    },
    {
        id: 4,
        title: "하이포 다이아베틱",
        category: "사료",
        price: 27000,
        img: '../sub1/img/menu4.png',
        desc: `식이 알레르기 및 당뇨 관리`
    },
    {
        id: 5,
        title: "도그 락토프리 포스트 파우더(유산균)",
        category: "영양제",
        price: 32000,
        img: '../sub1/img/Nutrients1.png',
        desc: `강아지 전용 프로바이오틱스 유산균`
    },
    {
        id: 6,
        title: "도그 엔자임 파우더(췌장건강)",
        category: "영양제",
        price: 32000,
        img: '../sub1/img/Nutrients2.png',
        desc: `3대 대표 소화효소`
    },
    {
        id: 7,
        title: "도그 피부 올케어(SET)",
        category: "케어용품",
        price: 75500,
        img: '../sub1/img/care1.png',
        desc: `반려동물 피부 관리를 위한 피부 영양제, 강아지 저자극 샴푸, 보습 크림 SET`
    },
    {
        id: 8,
        title: "도그 스킨 밸런싱 샴푸(세정)",
        category: "케어용품",
        price: 28000,
        img: '../sub1/img/care2.png',
        desc: `피부 진정 및 세정을 위한 강아지 전용 샴푸`
    },
    {
        id: 9,
        title: "밀키츄 (링/스틱/킹스틱/폴드)",
        category: "간식",
        price: 6900,
        img: '../sub1/img/snack1.png',
        desc: `네덜란드 산양유를 듬뿍 넣어 오랫동안 즐길 수 있는 천영 우피껌`
    },
    {
        id: 10,
        title: "캐니비타 에센셜 세트(콜라겐+올인원덴탈츄)",
        category: "간식",
        price: 48900,
        img: '../sub1/img/snack2.png',
        desc: `페스룸X동국제약의 올인원 멀티 케어 솔루션`
    },
    {
        id: 11,
        title: "퓨어 튜나 스틱(참치/&연어/&닭가슴살)",
        category: "간식",
        price: 3000,
        img: '../sub1/img/snack3.png',
        desc: `참치 명가 동원의 노하우를 듬뿍 담은 휴먼그레이드 간식`
    }
]

document.addEventListener('DOMContentLoaded', () => {

    const menulist = document.querySelector('.menu_list')
    const btnbox = document.querySelector('.btn')

    function menubox(menuItem) {
        let menus = menuItem.map((item) => {
            return `<div class="item">
            <img src="${item.img}" alt="${item.title}">
            <div class="text">
            <div class="title">
                <h3>${item.title}</h3>
                <h4 class="price">${item.price}￦</h4>
                </div>
                <p class="info">${item.desc}</p>
            </div>
            </div>`
        });
        menus = menus.join("")
        menulist.innerHTML = menus
    }
    menubox(menu)


    //버튼
    function menubtn() {
        // reduce() 매서드 배열의 각 요소에 대해 주어진 리듀서(reducer)
        // 함수를 실행하고, 하나의 결과값을 반환

        const categorys = menu.reduce((value, item) => {
            //includes : 요소가 배열안에 존재하는 경우에만 참의 값을 반환시킴
            if (!value.includes(item.category)) {
                value.push(item.category)
            }
            return value;
        }, ["전체"]
        );

        const categorybtns = categorys.map((category) => {
            return `<button type="button" class="cbtn" data-id=${category}> ${category} </button>`
        }).join("")

        btnbox.innerHTML = categorybtns;
        const cbtn = btnbox.querySelectorAll(".cbtn")
        // console.log(cbtn)

        cbtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                let category = e.currentTarget.dataset.id;
                let categorymenu = menu.filter((menuItem) => {
                    if (menuItem.category === category) {
                        return menuItem
                    }
                });

                if (category === "전체") {
                    menubox(menu);
                } else {
                    menubox(categorymenu)
                }
            })
        })

    }

    menubtn()




    // 
});