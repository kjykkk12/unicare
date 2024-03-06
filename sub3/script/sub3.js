$(function () {

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
            $(e.target).css({ borderTop: '3px solid #ffc410' });
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
        title: "강아지 슬개골 탈구 증상과 치료, 관리법은?",
        category: "질병백과",
        img: '../sub3/img/main_contents1.png',
        stext: `강아지 슬개골 탈구란, 무릎을 덮고 있는 작은 뼈인 슬개골이 원래 위치에서 벗어나는 현상을 말해요. 슬개골 탈구가 생기는 가장 큰 원인은 유전인데 골격과 근육이 선천적으로 약하게 태어난거죠...`,
        desc: `view more+`
    },
    {
        id: 2,
        title: "강아지 분리불안 A to Z",
        category: "행동백과",
        img: '../sub3/img/main_contents6.png',
        stext: `분리불안(Separation Anxiety)이란 강아지가 보호자와 떨어진 상태에서 과도한 불안과스트레스를 느끼면서 보이는 각종 문제행동을 말합니다...`,
        desc: `view more+`
    },
    {
        id: 3,
        title: "강아지 사람 음식, 급여 가능한 것은?",
        category: "케어꿀팁",
        img: '../sub3/img/main_contents13.png',
        stext: `강아지에게 맛있는 걸 주고 싶은 마음은 굴뚝같지만, 자칫 했다가는 생명에 위협을 줄 수도 있기에 주의가 필요합니다. 강아지가 먹어도 되는 사람 음식에 대해 함께 살펴보겠습니다...`,
        desc: `view more+`
    },
    {
        id: 4,
        title: "강아지 치근단농양?",
        category: "질병백과",
        img: '../sub3/img/main_contents2.png',
        stext: `치근단농양은 치아 뿌리 부분에 세균 증식에 의해 농양(고름)이 발생한 상태를 의미합니다. 고름이 발생하면 비강이나 눈 밑 피부 등을 통해 외부로 배출되기 때문에 원인을 혼동하기 쉽습니다...`,
        desc: `view more+`
    },
    {
        id: 5,
        title: "강아지 마운팅에 대해",
        category: "행동백과",
        img: '../sub3/img/main_contents8.png',
        stext: `가장 대표적인 이유는 성적인 이유입니다. 마운팅과 더불어 꼬리를 치켜세우고, 발로 어딘가를 긁고, 낮은 자세로 엉덩이만 드는 플레이 바우 자세를 취했다면 이 의미일 가능성이 높습니다...`,
        desc: `view more+`
    },
    {
        id: 6,
        title: "일교차가 큰 환절기, 이 질환을 조심하세요!",
        category: "케어꿀팁",
        img: '../sub3/img/main_contents14.png',
        stext: `환절기에는 일교차가 심하고 습도가 낮아지기 때문에 사람뿐 아니라 반려동물도 다양한 질병에 취약해집니다. 특히 야외 활동을 자주 하는 동물의 경우 환절기 질환에 더 취약하기 때문에...`,
        desc: `view more+`
    },
    {
        id: 7,
        title: "강아지 피부암, 흑색종이란?",
        category: "질병백과",
        img: '../sub3/img/main_contents3.png',
        stext: `멜라노마라고도 불리는 흑색종은 악성도가 매우 높은 피부암입니다. 멜라닌 색소를 만드는 멜라노사이트가 종양화되어, 검은색 혹은 갈색의 반점으로 피부에 나타나게 됩니다...`,
        desc: `view more+`
    },
    {
        id: 8,
        title: "똥 먹는 강아지, 식분증 대처방법",
        category: "행동백과",
        img: '../sub3/img/main_contents9.png',
        stext: `식분증을 어린 강아지에서 흔하게 나타나는 행동이지만, 습관화되면 고치기 어려울 수 있습니다. 식이 관리, 환경 관리, 올바른 훈련, 생활습관 개선 등을 통해 빠르게 교정해주는 것이 좋습니다...`,
        desc: `view more+`
    },
    {
        id: 9,
        title: "강아지 봄 산책 시 주의사항",
        category: "케어꿀팁",
        img: '../sub3/img/main_contents15.png',
        stext: `봄은 산책의 계절! 시원한 바람이 불고 따뜻한 햇빛이 비추는 산책의 계절이 돌아왔어요. 강아지들은 푹신푹신한 잔디밭, 풀잎들을 밟으며 흩날리는 벚꽃을 따라서 신나게 뛰어다니기 바쁘죠...`,
        desc: `view more+`
    },
    {
        id: 10,
        title: "강아지 자가면역질환에 대해",
        category: "질병백과",
        img: '../sub3/img/main_contents4.png',
        stext: `어떠한 부위에 어떠한 증상이 나타나느냐에 따라 질병명이 달라지지만, 공통적으로 자가면역질환은 몸 속에 있는 면역 체계가 몸을 거부하게 되어 여러 증상이 나타나는 질환입니다...`,
        desc: `view more+`
    },
    {
        id: 11,
        title: "입 짧은 우리 아이 편식 고치기",
        category: "행동백과",
        img: '../sub3/img/main_contents10.png',
        stext: `반려동물의 편식과 대처 방법에 대해서 이야기 하고있지만, 사실 식욕 부진은 주로 질병의 전조 증상으로 나타나는 경우가 많습니다. 그래서 밥을 먹지 않는 것을 단순히 편식으로만 보고 넘어가는 것은...`,
        desc: `view more+`
    },
    {
        id: 12,
        title: "강아지도 탈모에 걸리나요?",
        category: "케어꿀팁",
        img: '../sub3/img/main_contents16.png',
        stext: `강아지도 사람과 같이 탈모에 걸릴 수 있어요. 환절기만 되면, 탈모가 아닐까 싶을 정도로 뿜어대는 죽은 털들... 털갈이 시기에 대량의 털이 빠지는 것은 매우 자연스러운 현상입니다...`,
        desc: `view more+`
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
                <p class="price">${item.stext}</p>
                </div>
                <button class="info">${item.desc}</button>
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