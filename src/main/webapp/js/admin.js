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