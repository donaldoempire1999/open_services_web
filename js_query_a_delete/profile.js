$(async function () {

    async function access(url, method) {

        try {
            return await fetch(`https://open-services-api.herokuapp.com${url}`, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
            })

        } catch (e) {
            return e;
        }
    }

    //alert(localStorage.getItem("userId"));
    let response = await access(`/users/${localStorage.getItem("userId")}`, 'GET');
    let data = await response.json();
    console.log(data);
    let corps = "";
    for (let key in data.user) {

        if (key === "person") {

            for (let k in data.user["person"]) {

                let tr = "";
                let td1 = "<td>" + k + "</td>";
                let td2 = "<td>" + data.user["person"][k] + "</td>";
                let td3 = `<td><button class="btn btn-primary" style="size: 5px;"><i class="fa fa-pencil"></i></button></td>`
                tr = `<tr>${td1.concat(td2).concat(td3)}</tr>`;
                corps = corps.concat(tr);
            }

        }
        if (key === "address") {

            for (let k in data.user["address"]) {

                let tr = "";
                let td1 = "<td>" + k + "</td>";
                let td2 = "<td>" + data.user["address"][k] + "</td>";
                let td3 = `<td><button class="btn btn-primary" style="size: 5px;"><i class="fa fa-pencil"></i></button></td>`
                tr = `<tr>${td1.concat(td2).concat(td3)}</tr>`;
                corps = corps.concat(tr);
            }

        }

    }
    
    let table = `<table class="table"> ${corps} </table>`;

    let div_content = document.getElementById("tb_profile");//rediriger vers le fichier profile.html a la div front_profile
    div_content.innerHTML = table;

});