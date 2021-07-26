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
    let response = await access(`/publications`, 'GET');
    let data = await response.json();
    console.log(data);
    let corps = "";
    for (let key in data.publications) {

        if (key === "task_description") {

            for (let m in data.publications["task_description"]) {

                let tr = "";
                let td1 = "<td>" + m + "</td>";
                let td2 = "<td>" + data.publications["task_description"][m] + "</td>";
                let td3 = `<td><button class="btn btn-primary" style="size: 5px;"><i class="fa fa-pencil"></i></button></td>`
                tr = `<tr>${td1.concat(td2).concat(td3)}</tr>`;
                corps = corps.concat(tr);
            }

        }
    }
    
    let table_media = `<table class="table"> ${corps} </table>`;

    let div_content = document.getElementById("tb_media"); //rediriger vers le fichier profile.html a la div front_consult
    div_content.innerHTML = table_media;

//toutes les publication************************************************************************

    let response = await access(`/publications/all`, 'GET');
    let data_media = await response.json();
    console.log(data_media);
    let corps = "";
    for (let key in data_media.publications) {

        if (key === "task_description") {

            for (let m in data_media.publications["task_description"]) {

                let tr = "";
                let td1 = "<td>" + m + "</td>";
                let td2 = "<td>" + data_media.publications["task_description"][m] + "</td>";
                let td3 = `<td><button class="btn btn-primary" style="size: 5px;"><i class="fa fa-pencil"></i></button></td>`
                tr = `<tr>${td1.concat(td2).concat(td3)}</tr>`;
                corps = corps.concat(tr);
            }

        }

    }
    let table_publications = `<table class="table"> ${corps} </table>`;

    let div_content = document.getElementById("tb_publications");//rediriger vers le fichier chercher_job.html a la div front_consult
    div_content.innerHTML = table_publications;

});