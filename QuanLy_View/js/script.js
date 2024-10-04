function loadContent(url) {
    var xhr = new XMLHttpRequest();  // Tạo đối tượng XMLHttpRequest

    xhr.open('GET', url, true);  // Thiết lập yêu cầu GET tới URL

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Khi yêu cầu hoàn tất và thành công, thay đổi nội dung
            document.getElementById('content').innerHTML = xhr.responseText;
        } else if (xhr.status !== 200) {
            // Xử lý lỗi nếu không tải được trang
            document.getElementById('content').innerHTML = "<p>Failed to load content. Please try again.</p>";
        }
    };

    xhr.send();  // Gửi yêu cầu AJAX
}
