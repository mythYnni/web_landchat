function selectButton(button) {
    // Tìm nhóm chứa nút được nhấn
    const group = button.closest('.btn-group-create-list');
    // Bỏ class 'active' khỏi tất cả các nút trong nhóm đó
    const buttons = group.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active'));
    // Thêm class 'active' vào nút được nhấn
    button.classList.add('active');
}

function toggleCheckbox(element) {
    // Tìm input trong phần tử cha (common-check-list)
    var checkbox = element.querySelector('input[type="checkbox"]');
    // Đảo ngược trạng thái của checkbox
    checkbox.checked = !checkbox.checked;
}