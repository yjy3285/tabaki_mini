document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('findAddressBtn').addEventListener('click', function() {
        document.getElementById('addressModal').style.display = 'block';
    });

    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('addressModal').style.display = 'none';
    });

    document.getElementById('searchBtn').addEventListener('click', function() {
        const query = document.getElementById('roadNameSearch').value;
        // 도로명 주소 검색 API 호출 (예: 다음 API 또는 공공 데이터 포털 API)
        // 검색 결과를 바탕으로 주소 리스트를 생성
        const results = ['서울특별시 강남구 테헤란로 123', '서울특별시 강남구 강남대로 456']; // 예시 데이터
        const addressList = document.getElementById('addressList');
        addressList.innerHTML = '';

        results.forEach(address => {
            const li = document.createElement('li');
            li.textContent = address;
            li.addEventListener('click', function() {
                document.getElementById('address').value = address;
                document.getElementById('addressModal').style.display = 'none';
            });
            addressList.appendChild(li);
        });
    });

    window.onclick = function(event) {
        if (event.target == document.getElementById('addressModal')) {
            document.getElementById('addressModal').style.display = 'none';
        }
    };
});
