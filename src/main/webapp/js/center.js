$('#boardSearchForm').submit(function(event){
    event.preventDefault();
    
    const formCategory = $('#searchCategory');
    const boardSearch = $('#boardSearch');
    if(!boardSearch.val()) {
        alert('검색하실 내용을 입력해 주세요.');
        return;
    }

    let str = '검색하신 키워드입니다. \n';
    str += '['+formCategory.val()+': '+ boardSearch.val().trim() + ']\n';
    alert(str);
});

$('#boardWriteForm').submit(function(event){
    event.preventDefault();

    const memberName = $('#memberName');
    const productList = $('#productListForm');
    const productReview = $('#productReviewForm');
    const boardTitle = $('#boradTitleForm');
    const boardContent = $('#boradContentForm');
    const boardFile = $('#boardFileForm');

    if(!boardTitle.find('#title').val()) {
        alert('제목을 입력해 주세요.');
        return;
    } else if (!boardContent.find('#boardContent').val()) {
        alert('내용을 입력해 주세요!');
        return;
    }

    let str = '작성하신 내역입니다.\n';
    str += '작성자: ['+memberName.val()+']\n';
    productList.length != 0 && (
        str += '카테고리: ['
            + productList.find('#category option:selected').val()
            + '] & 상품명: ['
            + productList.find('#boardProductName option:selected').text().trim()
            +']\n'
    );
    productReview.length != 0 && (
        str += '리뷰: ['
            + productReview.find('#reviewProdName').text()
            + ' & '
            + productReview.find('#reviewProdPrice').text()
            + ']\n'
    );
    str += '제목 : ['+boardTitle.find('#title').val()+']\n';
    str += '비공개여부 : ['+boardTitle.find('#secretBorad').is(':checked')+']\n';
    str += '내용 : ['+boardContent.find('#boardContent').val()+']\n';
    boardFile.find('#attachment')[0].files.length > 0 ? 
        (str += '첨부파일 : ['+boardFile.find('#attachment')[0].files[0].name+']') : 
        (str += '첨부파일 : [첨부된 파일이 없음]');

    alert(str);
});