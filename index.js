window.onload = function () {
    const inputProblemList = document.getElementsByName("problem");
    const inputBrandList = document.getElementsByName("brand");
    const selectModel = document.getElementById("phone-model");
    const otherBrandInput = document.getElementById("other-brand");
    const guaranteeSelect = document.getElementById("guarantee-type");

    const cotizarBtn = document.getElementById("cotizar-btn");
    const popupForm = document.getElementById("mail-popup");
    const popupExitBtn = document.getElementsByClassName(
        "exit-popup-container"
    )[0];

    let selectedBrand = "";
    let selectedProblem = "";
    let price = document.getElementById("price-text");

    cotizarBtn.addEventListener("click", function (e) {
        const otherBrandInput = document.getElementById("other-brand");
        const guaranteeTypeSelect = document.getElementById("guarantee-type");
        const selectedGuaranteeType =
            guaranteeTypeSelect.options[guaranteeTypeSelect.selectedIndex];
        const selectedModel = selectModel.options[selectModel.selectedIndex];

        if (selectedBrand == "") {
            selectedBrand = otherBrandInput.value;
        }

        if (
            selectedProblem == "" ||
            selectedBrand == "" ||
            selectedGuaranteeType.value == ""
        ) {
            alert("Ingrese la informacion necesaria por favor");
            return;
        }

        price.innerHTML = `$${
            problemsBudget[selectedModel.value][selectedProblem][
                selectedGuaranteeType.value
            ]
        }.00`;
    });
    const problemsBudget = {
        "iphone-5": {
            "pantalla-rota": {
                B: 25,
                AAA: 35,
            },
        },
        "iphone-6": {
            "pantalla-rota": {
                B: 35,
                AAA: 45,
            },
        },
        "iphone-6-plus": {
            "pantalla-rota": {
                B: 39,
                AAA: 49,
            },
        },
        "iphone-7": {
            "pantalla-rota": {
                B: 45,
                AAA: 55,
            },
        },
        "iphone-7-plus": {
            "pantalla-rota": {
                B: 49,
                AAA: 59,
            },
        },
        "iphone-8": {
            "pantalla-rota": {
                B: 55,
                AAA: 65,
            },
        },
        "iphone-8-plus": {
            "pantalla-rota": {
                B: 59,
                AAA: 69,
            },
        },
        "iphone-x": {
            "pantalla-rota": {
                B: 179,
                AAA: 199,
            },
        },
        "iphone-xs": {
            "pantalla-rota": {
                B: 195,
                AAA: 215,
            },
        },
        "iphone-xr": {
            "pantalla-rota": {
                B: 105,
                AAA: 159,
            },
        },
        "iphone-11": {
            "pantalla-rota": {
                B: 199,
                AAA: 219,
            },
        },
        "iphone-11-pro": {
            "pantalla-rota": {
                B: 435,
                AAA: 455,
            },
        },
        "iphone-11-pro-max": {
            "pantalla-rota": {
                B: 445,
                AAA: 465,
            },
        },
        "iphone-xs-max": {
            "pantalla-rota": {
                B: 199,
                AAA: 269,
            },
        },
        "samsung-j4": {
            "pantalla-rota": {
                B: 49,
                AAA: 65,
            },
        },
        "samsung-j5": {
            "pantalla-rota": {
                B: 49,
                AAA: 59,
            },
        },
        "samsung-j510": {
            "pantalla-rota": {
                B: 49,
                AAA: 65,
            },
        },
        "samsung-j530": {
            "pantalla-rota": {
                B: 49,
                AAA: 69,
            },
        },
        "samsung-j4+": {
            "pantalla-rota": {
                B: 65,
                AAA: 75,
            },
        },
        "samsung-j6": {
            "pantalla-rota": {
                B: 65,
                AAA: 85,
            },
        },
        "samsung-j7": {
            "pantalla-rota": {
                B: 45,
                AAA: 55,
            },
        },
        "samsung-j701": {
            "pantalla-rota": {
                B: 49,
                AAA: 59,
            },
        },
        "samsung-j7pro": {
            "pantalla-rota": {
                B: 49,
                AAA: 69,
            },
        },
        "samsung-j8": {
            "pantalla-rota": {
                B: 69,
                AAA: 89,
            },
        },
        "samsung-j810": {
            "pantalla-rota": {
                B: 65,
                AAA: 85,
            },
        },
        "samsung-s5": {
            "pantalla-rota": {
                B: 55,
                AAA: 85,
            },
        },
        "samsung-s8": {
            "pantalla-rota": {
                B: 215,
                AAA: 235,
            },
        },
        "samsung-s9": {
            "pantalla-rota": {
                B: 245,
                AAA: 259,
            },
        },
        "samsung-s9-plus": {
            "pantalla-rota": {
                B: 249,
                AAA: 289,
            },
        },
        "samsung-s10+": {
            "pantalla-rota": {
                B: 399,
                AAA: 409,
            },
        },
        "samsung-a10": {
            "pantalla-rota": {
                B: 69,
                AAA: 79,
            },
        },
        "samsung-a01": {
            "pantalla-rota": {
                B: 65,
                AAA: 75,
            },
        },
        "samsung-a20": {
            "pantalla-rota": {
                B: 89,
                AAA: 105,
            },
        },
        "samsung-a30": {
            "pantalla-rota": {
                B: 89,
                AAA: 119,
            },
        },
        "samsung-a50": {
            "pantalla-rota": {
                B: 79,
                AAA: 95,
            },
        },
        "samsung-a51": {
            "pantalla-rota": {
                B: 169,
                AAA: 189,
            },
        },
        "samsung-a70": {
            "pantalla-rota": {
                B: 95,
                AAA: 175,
            },
        },
        "samsung-a80": {
            "pantalla-rota": {
                B: 189,
                AAA: 205,
            },
        },
        "samsung-a520": {
            "pantalla-rota": {
                B: 69,
                AAA: 79,
            },
        },
        "samsung-a8": {
            "pantalla-rota": {
                B: 99,
                AAA: 105,
            },
        },
        "samsung-a51": {
            "pantalla-rota": {
                B: 169,
                AAA: 189,
            },
        },
        "samsung-a7": {
            "pantalla-rota": {
                B: 119,
                AAA: 129,
            },
        },
        "samsung-note-9": {
            "pantalla-rota": {
                B: 255,
                AAA: 275,
            },
        },
    };

    for (let i = 0; i < inputProblemList.length; i++) {
        inputProblemList[i].parentNode.addEventListener("click", function () {
            if (this.children[2].checked == true) {
                this.children[2].checked = false;
                selectedProblem = "";
            } else {
                this.children[2].checked = true;
                selectedProblem = this.id;
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

                selectedBrand = "";
                selectModel.innerHTML = "";
                selectModel.disabled = true;
                guaranteeSelect.disabled = true;
                otherBrandInput.disabled = false;
            } else {
                this.children[2].checked = true;

                selectedBrand = this.id;
                switchSelectOptions(selectedBrand);
                selectModel.disabled = false;
                guaranteeSelect.disabled = false;
                otherBrandInput.disabled = true;
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

    /** POPUP exit btn*/

    popupExitBtn.addEventListener("click", function () {
        if (this.children[0].checked) {
            this.children[0].checked = false;
            popupForm.style.display = "none";
        } else {
            this.children[0].checked = true;
            popupForm.style.display = "block";
        }
    });

    /**** Agrega opciones al select de modelo al escoger una marca ****/

    function switchSelectOptions(brandId) {
        switch (brandId) {
            case "apple":
                selectModel.innerHTML =
                    '<option value="iphone-5">iPhone 5</option><option value="iphone-5">iPhone 5S</option><option value="iphone-5">iPhone 5C</option><option value="iphone-6">iPhone 6</option><option value="iphone-6">iPhone 6S</option><option value="iphone-6-plus">iPhone 6 Plus</option><option value="iphone-7">iPhone 7</option><option value="iphone-7-plus">iPhone 7 Plus</option><option value="iphone-8">iPhone 8</option><option value="iphone-8-plus">iPhone 8 Plus</option><option value="iphone-x">iPhone X</option><option value="iphone-xs">iPhone XS</option><option value="iphone-xr">iPhone XR</option><option value="iphone-11">iPhone 11</option><option value="iphone-11-pro">iPhone 11 Pro</option><option value="iphone-11-pro-max">iPhone 11 Pro Max</option><option value="iphone-xs-max">iPhone XS Max</option>';
                break;
            case "samsung":
                selectModel.innerHTML =
                    '<option value="samsung-j4">Samsung J4/J400</option> <option value="samsung-j5">Samsung J5/J500</option> <option value="samsung-j510">Samsung J5/J510</option> <option value="samsung-j530">Samsung J530/J5PRO</option> <option value="samsung-j4+">Samsung J4+</option> <option value="samsung-j4+">Samsung J6+</option> <option value="samsung-j6">Samsung J6/J600</option> <option value="samsung-j7">Samsung J7/J700</option> <option value="samsung-j701">Samsung J701/J710</option> <option value="samsung-j7pro">Samsung J7PRO/J737</option> <option value="samsung-j8">Samsung J8/J800</option> <option value="samsung-j810">Samsung J8/J810</option> <option value="samsung-s5">Samsung S5</option> <option value="samsung-s8">Samsung S8</option> <option value="samsung-s8">Samsung S8 Plus</option> <option value="samsung-s9">Samsung S9</option> <option value="samsung-s9-plus">Samsung S9 Plus</option> <option value="samsung-s10+">Samsung S10+</option> <option value="samsung-a10">Samsung A10</option> <option value="samsung-a10">Samsung A10S</option> <option value="samsung-a01">Samsung A01</option> <option value="samsung-a20">Samsung A20</option> <option value="samsung-a20">Samsung A20S</option> <option value="samsung-a30">Samsung A30</option> <option value="samsung-a30">Samsung A30S</option> <option value="samsung-a50">Samsung A50</option> <option value="samsung-a51">Samsung A51</option> <option value="samsung-a80">Samsung A80</option> <option value="samsung-a520">Samsung A520</option> <option value="samsung-a8">Samsung A8/A530</option> <option value="samsung-a51">Samsung A51</option> <option value="samsung-a7">Samsung A7/A750</option> <option value="samsung-note-9">Samsung Note 9</option>';
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
};
