$('#headerSearch').submit(function(event){
    event.preventDefault();
    const searchText = $('#headerSearch').find('.headerSearchInput');

    if(searchText.val().trim() === '') {
        alert('검색하실 상품을 입력해 주세요.');
    } else {
        // ajax를 통해 서버에서 데이터를 요청하고 받아온 데이터를 근거로 리스트 페이지를 상품 검색 페이지로 바꾸고 출력한다.
        alert('검색을 시도한 상품은 ' + searchText.val() + '입니다.');
        location.href = 'itemList-static.html';
    }
});