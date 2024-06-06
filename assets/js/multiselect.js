const selectorBtn_multiselect = document.querySelector('.select-btn-multiselect');
const items_multiselect = document.querySelectorAll('.items-multiselect');
const nestedItems_multiselect = document.querySelectorAll('.items-multiselect.has-nested');
const nestedLists = document.querySelectorAll('.nested-list .items-multiselect-con');

selectorBtn_multiselect.addEventListener("click", () => {
    selectorBtn_multiselect.classList.toggle("open");
});

items_multiselect.forEach(item => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!item.classList.contains('has-nested')) {
            item.classList.toggle("checked-multiselect");
            updateCheckedCount();
        }
    });
});

nestedItems_multiselect.forEach(item => {
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
    let checked = document.querySelectorAll('.checked-multiselect:not(.has-nested)');
    let btnText_checked = document.querySelector('.btn-select-multiselect');
    if (checked && checked.length > 0) {
        btnText_checked.innerText = `${checked.length} Lựa Chọn`;
    } else {
        btnText_checked.innerText = 'Loại bất động sản';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var customSelects = document.querySelectorAll(".custom-select");

    customSelects.forEach(function(customSelect) {
        var selectedOption = customSelect.querySelector(".selected-option");
        var optionsList = customSelect.querySelector(".options-list");

        selectedOption.addEventListener("click", function() {
            // Đóng tất cả các custom select khác
            customSelects.forEach(function(cs) {
                if (cs !== customSelect) {
                    cs.querySelector(".options-list").style.display = "none";
                }
            });

            // Mở hoặc đóng custom select hiện tại
            optionsList.style.display = optionsList.style.display === "block" ? "none" : "block";
        });

        optionsList.addEventListener("click", function(event) {
            var target = event.target;
            if (target.tagName === "LI") {
                selectedOption.textContent = target.textContent;
                optionsList.style.display = "none";
            }
        });
    });
});