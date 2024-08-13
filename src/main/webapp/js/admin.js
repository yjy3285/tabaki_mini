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