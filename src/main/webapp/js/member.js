// member.js

// 중복 확인 버튼 클릭 시 경고 메시지 표시
function showAlert() {
    alert("중복 확인되었습니다");
}

// 다음 주소 검색 API 호출 함수
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
            document.getElementById('postcode').value = data.zonecode;
            document.getElementById('address').value = addr;
            document.getElementById('address_detail').focus();
        }
    }).open();
}

// 이메일 도메인 선택 시 처리 함수
function setEmailDomain() {
    var emailSelect = document.getElementById("email_select");
    var emailDomain = document.getElementById("email_domain");
    if (emailSelect.value === "") {
        emailDomain.value = "";
        emailDomain.readOnly = false;
    } else {
        emailDomain.value = emailSelect.value;
        emailDomain.readOnly = true;
    }
}

// 폼 유효성 검사 함수
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var passwordConfirm = document.getElementById("password_confirm").value;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,16}$/;

    // 아이디 길이 검사
    if (username.length < 6) {
        alert("아이디는 6글자 이상이어야 합니다.");
        return false;
    }

    // 비밀번호 패턴 검사
    if (!passwordRegex.test(password)) {
        alert("비밀번호는 영문 대소문자, 숫자, 특수문자를 혼용하여 10-16자 사이여야 합니다.");
        return false;
    }

    // 비밀번호 일치 여부 검사
    if (password !== passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    }

    return true;
}
