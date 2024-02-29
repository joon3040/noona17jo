document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const modal = document.getElementById('modal');
    const closeBtns = document.querySelectorAll('.close');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // 가상의 애견용품 데이터
    const products = [
        { id: 1, name: '애견 간식', description: '맛있는 간식입니다.' },
        { id: 2, name: '애견 장난감', description: '애견이 좋아할 장난감입니다.' },
        { id: 3, name: '목줄과 목걸이', description: '애견을 위한 목줄과 목걸이입니다.' },
        { id: 4, name: '애견 샴푸', description: '애견을 위한 샴푸입니다.' },
        { id: 5, name: '고양이 탈취제', description: '냄새 제거' },
        { id: 6, name: '고양이 휴대폰 케이스', description: '귀여운 투명 하드젤리 폰케이스' },
        { id: 7, name: '고양이 스티커', description: '투명 스티커' },
        { id: 8, name: '고양이 인형', description: '귀여운 종이 인형' }
    ];


   
    // 상품 이미지 URL 배열
    var productImages = [
        'img/us-product/pic9.jpg',
        'img/us-product/pic10.jpg',
        'img/us-product/pic11.jpg',
        'img/us-product/pic12.jpg',
        'img/us-product/pic13.jpg',
        'img/us-product/pic14.jpg',
        'img/us-product/pic15.jpg',
        'img/us-product/pic16.jpg',
        'img/us-product/pic17.jpg',
        'img/us-product/pic18.jpg',
        'img/us-product/pic19.jpg',
        // 추가 이미지 URL 추가 가능
    ];

    // 이미지를 출력할 요소 선택
    var container = document.getElementById('product-list');

    // 상품 이미지를 반복하여 HTML에 추가
    productImages.forEach(function(imageUrl) {
        var img = document.createElement('img'); // 이미지 요소 생성
        img.src = imageUrl; // 이미지 소스 설정
        img.alt = 'Product Image'; // 이미지 설명 설정 (alt 속성)
        img.className = 'product-image'; // 이미지에 클래스 추가 (CSS 스타일 적용을 위해)

        container.appendChild(img); // 이미지를 컨테이너에 추가
    });



    // 제품 목록 생성
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <button class="detail-btn" data-id="${product.id}">자세히 보기</button>
        `;
        productList.appendChild(productElement);
    });

    // 모달 열기
    function openModal(productId) {
        const selectedProduct = products.find(product => product.id == productId);
        document.getElementById('product-title').textContent = selectedProduct.name;
        document.getElementById('product-description').textContent = selectedProduct.description;
        modal.style.display = 'block';
    }

    // 모달 닫기
    function closeModal() {
        modal.style.display = 'none';
    }

    // 상세 페이지 버튼에 클릭 이벤트 추가
    document.querySelectorAll('.detail-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            openModal(productId);
        });
    });

    // 닫기 버튼에 클릭 이벤트 추가
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    closeModalBtn.addEventListener('click', closeModal);

    // 모달 바깥 영역 클릭 시 모달 닫기
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

});