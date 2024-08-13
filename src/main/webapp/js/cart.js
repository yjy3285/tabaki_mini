// 선택삭제 버튼 기능
document.querySelector('.btns_order .btn-outline-secondary:nth-child(1)').addEventListener('click', function () {
    const checkedItems = document.querySelectorAll('#cartTable tbody input[type="checkbox"]:checked');
    checkedItems.forEach(function (item) {
        const row = item.closest('tr');
        row.parentNode.removeChild(row);
    });
    updateTotalPrice();
});

// 삭제 버튼 클릭 시 해당 행 삭제
document.querySelectorAll('.btn-danger.btn-sm').forEach(function(button) {
    button.addEventListener('click', function() {
        const row = this.closest('tr');
        row.parentNode.removeChild(row);
        updateTotalPrice();
    });
});

// 장바구니 비우기 버튼 기능
document.querySelector('.btns_order .btn-outline-secondary:nth-child(3)').addEventListener('click', function () {
    const cartItems = document.querySelectorAll('#cartTable tbody tr');
    cartItems.forEach(function (item) {
        item.parentNode.removeChild(item);
    });
    updateTotalPrice();
});

// 선택상품 주문하기 버튼 기능
document.querySelector('.btns_order .btn-outline-danger').addEventListener('click', function () {
    window.location.href = '#';
});

// 총 금액 업데이트 함수
function updateTotalPrice() {
    let totalPrice = 0;
    const rows = document.querySelectorAll('#cartTable tbody tr');
    rows.forEach(function (row) {
        const priceText = row.querySelector('.tb_price').innerText;
        const price = parseInt(priceText.replace(/[^0-9]/g, ''), 10);
        totalPrice += price;
    });
    document.querySelector('.basket_totalprice strong').innerText = totalPrice.toLocaleString() + '원';
}