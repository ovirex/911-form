window.onload = function () {
    const inputProblemList = document.getElementsByName("problem");
    const inputBrandList = document.getElementsByName("brand");
    const selectModel = document.getElementById("phone-model");
    let selectedBrand = "";

    console.log(inputProblemList, inputBrandList);

    for (let i = 0; i < inputProblemList.length; i++) {
        inputProblemList[i].parentNode.addEventListener("click", function () {
            if (this.children[2].checked == true) {
                this.children[2].checked = false;
            } else {
                this.children[2].checked = true;
            }
        });
        inputProblemList[i].parentNode.addEventListener("click", function () {
            for (let j = 0; j < inputProblemList.length; j++) {
                if (inputProblemList[j].checked == true) {
                    inputProblemList[j].parentElement.style.border =
                        "3px solid var(--main-color)";
                } else {
                    inputProblemList[j].parentElement.style.border = "";
                }
            }
        });
    }
    for (let i = 0; i < inputBrandList.length; i++) {
        inputBrandList[i].parentNode.addEventListener("click", function () {
            if (this.children[2].checked == true) {
                this.children[2].checked = false;
                selectModel.innerHTML = "";
            } else {
                this.children[2].checked = true;
                selectedBrand = this.id;

                switch (selectedBrand) {
                    case "apple":
                        selectModel.innerHTML =
                            '<option value="1">Apple 1</option><option value="2">Apple 2</ption> <option value="3">Apple 3</option><option value="4">Apple 4</option><option value="5">Apple 5</option>';
                        break;
                    case "samsung":
                        selectModel.innerHTML =
                            '<option value="1">Samsung 1</option><option value="2">Samsung 2</ption> <option value="3">Samsung 3</option><option value="4">Samsung 4</option><option value="5">Samsung 5</option>';
                        break;
                    case "xiaomi":
                        selectModel.innerHTML =
                            '<option value="1">xiaomi 1</option><option value="2">xiaomi 2</ption> <option value="3">xiaomi 3</option><option value="4">xiaomi 4</option><option value="5">xiaomi 5</option>';
                        break;
                    case "huawei":
                        selectModel.innerHTML =
                            '<option value="1">huawei 1</option><option value="2">huawei 2</ption> <option value="3">huawei 3</option><option value="4">huawei 4</option><option value="5">huawei 5</option>';
                        break;
                    case "sony":
                        selectModel.innerHTML =
                            '<option value="1">sony 1</option><option value="2">sony 2</ption> <option value="3">sony 3</option><option value="4">sony 4</option><option value="5">sony 5</option>';
                        break;
                    case "tlc":
                        selectModel.innerHTML =
                            '<option value="1">tlc 1</option><option value="2">tlc 2</ption> <option value="3">tlc 3</option><option value="4">tlc 4</option><option value="5">tlc 5</option>';
                        break;
                    case "blu":
                        selectModel.innerHTML =
                            '<option value="1">blu 1</option><option value="2">blu 2</ption> <option value="3">blu 3</option><option value="4">blu 4</option><option value="5">blu 5</option>';
                        break;
                    case "siragon":
                        selectModel.innerHTML =
                            '<option value="1">siragon 1</option><option value="2">siragon 2</ption> <option value="3">siragon 3</option><option value="4">siragon 4</option><option value="5">siragon 5</option>';
                        break;
                    case "zte":
                        selectModel.innerHTML =
                            '<option value="1">zte 1</option><option value="2">zte 2</ption> <option value="3">zte 3</option><option value="4">zte 4</option><option value="5">zte 5</option>';
                        break;
                    case "lg":
                        selectModel.innerHTML =
                            '<option value="1">lg 1</option><option value="2">lg 2</ption> <option value="3">lg 3</option><option value="4">lg 4</option><option value="5">lg 5</option>';
                        break;
                    case "krip":
                        selectModel.innerHTML =
                            '<option value="1">krip 1</option><option value="2">krip 2</ption> <option value="3">krip 3</option><option value="4">krip 4</option><option value="5">krip 5</option>';
                        break;
                    case "yezz":
                        selectModel.innerHTML =
                            '<option value="1">yezz 1</option><option value="2">yezz 2</ption> <option value="3">yezz 3</option><option value="4">yezz 4</option><option value="5">yezz 5</option>';
                        break;
                    case "motorola":
                        selectModel.innerHTML =
                            '<option value="1">motorola 1</option><option value="2">motorola 2</ption> <option value="3">motorola 3</option><option value="4">motorola 4</option><option value="5">motorola 5</option>';
                        break;
                    case "alcatel":
                        selectModel.innerHTML =
                            '<option value="1">alcatel 1</option><option value="2">alcatel 2</ption> <option value="3">alcatel 3</option><option value="4">alcatel 4</option><option value="5">alcatel 5</option>';
                        break;
                }
            }
        });
        inputBrandList[i].parentNode.addEventListener("click", function () {
            for (let j = 0; j < inputBrandList.length; j++) {
                if (inputBrandList[j].checked == true) {
                    inputBrandList[j].parentElement.style.border =
                        "3px solid var(--main-color)";
                } else {
                    inputBrandList[j].parentElement.style.border = "";
                }
            }
        });
    }
};
