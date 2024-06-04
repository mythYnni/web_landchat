const dropdowns = document.querySelectorAll('.list-items-multiselect');

dropdowns.forEach(dropdown => {
    const btnText = dropdown.previousElementSibling.querySelector('.btn-select-multiselect');
    const items = dropdown.querySelectorAll('.items-multiselect');
    const nestedItems = dropdown.querySelectorAll('.items-multiselect.has-nested');
    const nestedLists = dropdown.querySelectorAll('.nested-list .items-multiselect-con');

    dropdown.previousElementSibling.addEventListener("click", () => {
        dropdown.previousElementSibling.classList.toggle("open");
        dropdown.classList.toggle("open");
    });

    items.forEach(item => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            if (!item.classList.contains('has-nested')) {
                item.classList.toggle("checked-multiselect");
                updateCheckedCount();
            }
        });
    });

    nestedItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            item.classList.toggle("show-nested");
        });
    });

    nestedLists.forEach(item => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            item.classList.toggle("checked-multiselect");
            updateCheckedCount();
        });
    });

    function updateCheckedCount() {
        let checked = dropdown.querySelectorAll('.checked-multiselect:not(.has-nested)');
        if (checked && checked.length > 0) {
            btnText.innerText = `${checked.length} Lựa Chọn`;
        } else {
            btnText.innerText = btnText.dataset.defaultText; // Sử dụng giá trị mặc định
        }
    }
});