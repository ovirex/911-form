window.onload = function () {
    const inputProblemList = document.getElementsByName("problem");
    const inputBrandList = document.getElementsByName("brand");
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

        console.log(inputProblemList[i].parentNode);
    }
    for (let i = 0; i < inputBrandList.length; i++) {
        inputBrandList[i].parentNode.addEventListener("click", function () {
            if (this.children[2].checked == true) {
                this.children[2].checked = false;
            } else {
                this.children[2].checked = true;
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
