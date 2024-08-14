$('#updateImagefileUpload').change(function(event){
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            $('#updateProductImagefile').attr('src', e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

$('#productMainImagefile').change(function(event){
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            $('#productMainImage').attr('src', e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

$('#totalProductSelect').change(function(event){
    var isChecked = $(this).is(':checked');
    
    $('.product-select').each(function(index){
        $(this).prop('checked', isChecked);
    });
});

$('#productSearchForm').submit(function(event){
    event.preventDefault();
    const selector = $('select#searchProductSelect option:selected');
    
    if (selector.val() == '검색조건') {
        alert('검색 조건을 선택하세요.');
    } else {
        alert('검색을 진행합니다.\n선택한 검색 타입 : '+selector.val());
    }
});

$('#orderSearchForm').submit(function(event){
    event.preventDefault();
    const selector = $('select#searchOrderSelect option:selected');
    
    if (selector.val() == '검색조건') {
        alert('검색 조건을 선택하세요.');
    } else {
        alert('검색을 진행합니다.\n선택한 검색 타입 : '+selector.val());
    }
});

function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = '';
            var extraAddr = '';

            // 도로명 주소와 지번 주소 구분
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }
            
            // 주소 필드에 값 설정
            document.getElementById('recevierPostNo').value = data.zonecode;
            document.getElementById('recevierAddr').value = addr;
            document.getElementById('recevierDetailsAddr').focus();
        }
    }).open();
}

$('#orderUpdateSubmit').submit(function(event){
    event.preventDefault();
    
    const phoneNumber = $('#receiverPhone').val();
    const orderProductName = [];
    const orderProductState = [];
    const orderProductData = $('#orderProductData');
    orderProductData.each(function(index){
        orderProductData.push($(this).find('td div.product-names').val());
        orderProductState.push($(this).find('select.form-control option:selected').val());
    });
    phoneNumber.replace('\[^0-9]\g', '');
    let str = '수정을 하려고 하는 내역은 다음과 같습니다.\n';
    str += '이름 : '+ $('#receiver').val()+'\n';
    str += '폰번호 : '+ $('#receiverPhone').val()+'\n';
    str += '우편번호 : '+ $('#recevierPostNo').val()+'\n';
    str += '주소 : '+ $('#recevierAddr').val()+' '+$('#recevierDetailsAddr').val()+'\n';
    str += orderProductData.length;
    for(let i=0; i<orderProductData.length; i++) {
        str+= '배송상태 : '+orderProductName[i]+' - '+orderProductState[i];
    }
    alert(str);
});