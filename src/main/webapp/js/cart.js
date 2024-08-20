// 삭제 버튼 클릭 시 해당 행 삭제
document.querySelectorAll('.btn-danger.btn-sm').forEach(function(button) {
    button.addEventListener('click', function() {
        const row = this.closest('tr');
        row.remove(row);
        updateTotalPrice();
    });
});


// 선택삭제 버튼 기능
document.querySelector('.btns_order .btn-outline-secondary:nth-child(1)').addEventListener('click', function () {
    const checkedItems = document.querySelectorAll('#cartTable tbody input[type="checkbox"]:checked');
    checkedItems.forEach(function (item) {
        const row = item.closest('tr');
        row.remove(row);
    });
    updateTotalPrice();
});


// 계속 쇼핑하기 버튼 기능
document.querySelector('.btns_order .btn-outline-secondary:nth-child(2)').addEventListener('click', function () {
    window.location.href = '../product/itemList-static.html';
});

// 장바구니 비우기 버튼 기능
document.querySelector('.btns_order .btn-outline-secondary:nth-child(3)').addEventListener('click', function () {
    const cartItems = document.querySelectorAll('#cartTable tbody tr');
    cartItems.forEach(function (item) {
        item.remove(item);
    });
    updateTotalPrice();
});



// 수량 증가 함수
document.querySelectorAll('.quantity-control button:last-child').forEach(function(button) {
    button.addEventListener('click', function() {
        let currentValue = parseInt(this.previousElementSibling.value);
         
        if (currentValue < 10) {
            this.previousElementSibling.value = currentValue + 1;
        } else {
            alert("최대 수량은 10개입니다.");
        }
        
        updateItemPrice(this);
        updateTotalPrice();
    });
});


// 수량 감소 함수
document.querySelectorAll('.quantity-control button:first-child').forEach(function(button) {
    button.addEventListener('click', function() {
        let currentValue = parseInt(this.nextElementSibling.value);
        
        if (currentValue > 1) {
            this.nextElementSibling.value = currentValue - 1;
        } else {
            alert("최소 수량은 1개입니다.");
        }
        
        updateItemPrice(this);
        updateTotalPrice();
    });
});



// 결제 예정가 수정 함수
function updateItemPrice(button) {
    const row = button.closest('tr');
    const priceElement = row.querySelector('.currentPrice');
    const unitPriceText = priceElement.dataset.unitPrice;
    const quantity = parseInt(row.querySelector('input[type="text"]').value, 10);

    const unitPrice = parseInt(unitPriceText.replace(/[^0-9]/g, ''), 10);
    const newPrice = unitPrice * quantity;

    priceElement.innerText = newPrice.toLocaleString() + '원';
}


// 총금액 수정 함수
function updateTotalPrice() {
    let totalPrice = 0;
    const rows = document.querySelectorAll('#cartTable tbody tr');
    rows.forEach(function (row) {
        const priceText = row.querySelector('.currentPrice').innerText;
        const price = parseInt(priceText.replace(/[^0-9]/g, ''), 10);
        totalPrice += price;
    });
    document.querySelector('.basket_totalprice strong').innerText = totalPrice.toLocaleString() + '원';
}

// 선택상품 주문하기 버튼 기능 & 유효성 체크
document.querySelector('.btns_order .btn-outline-danger').addEventListener('click', function () {
    const checkedItems = document.querySelectorAll('#cartTable tbody input[type="checkbox"]:checked');
    
    if (checkedItems.length > 0) {
        window.location.href = '../mypage/mypage-order.html';
    } else {
        alert("선택된 제품이 없습니다.");
    }
});
