const chon_huong = document.querySelector('#chon-huong');
const items_multiselect_huong_chinh = document.querySelectorAll('.items-multiselect-huong-chinh');

chon_huong.addEventListener("click", () => {
    chon_huong.classList.toggle("open");
    document.querySelector('.list-items-multiselec-huong-chinh').classList.toggle('show');
});

items_multiselect_huong_chinh.forEach(item => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        item.classList.toggle("checked-multiselect");

        const icon = item.querySelector('.check-icon-multiselect');
        if (item.classList.contains('checked-multiselect')) {
            icon.classList.remove('icon-plus');
            icon.classList.add('icon-minus');
        } else {
            icon.classList.remove('icon-minus');
            icon.classList.add('icon-plus');
        }
    });
});


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