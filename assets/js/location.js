document.addEventListener('DOMContentLoaded', () => {
    const provinces = [
        { name: "Hà Nội" },
        { name: "TP. Hồ Chí Minh" },
        { name: "Đà Nẵng" },
        { name: "Hải Phòng" },
        { name: "Cần Thơ" },
        // Thêm các tỉnh thành khác vào đây
    ];

    const locationBox = document.querySelector('.location');
    const selectedLocation = document.querySelector('.selected-location');
    const locationName = document.querySelector('.location-name');
    const optionsLocation = document.querySelector('.options-location');
    const searchBox = document.querySelector('.search-box-location');
    const locationList = document.querySelector('.location-list');

    // Chèn các tùy chọn tỉnh thành vào danh sách
    provinces.forEach(province => {
        const option = document.createElement('li');
        option.classList.add('option');
        option.innerText = province.name;
        locationList.appendChild(option);
    });

    let options = document.querySelectorAll('.option');

    function selectOption() {
        locationName.innerText = this.innerText;
        optionsLocation.classList.remove('active');
    }

    function searchProvince() {
        const searchQuery = searchBox.value.toLowerCase();
        options.forEach(option => {
            const isMatched = option.innerText.toLowerCase().includes(searchQuery);
            option.classList.toggle('hide', !isMatched);
        });
    }

    selectedLocation.addEventListener('click', (e) => {
        e.stopPropagation();
        optionsLocation.classList.toggle('active');
    });

    options.forEach(option => option.addEventListener('click', selectOption));
    searchBox.addEventListener('input', searchProvince);

    // Đóng danh sách khi click ra ngoài
    document.addEventListener('click', (e) => {
        if (!locationBox.contains(e.target)) {
            optionsLocation.classList.remove('active');
        }
    });
});