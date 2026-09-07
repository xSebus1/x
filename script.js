const btn_dodaj = document.querySelector('#btn-dodaj');

btn_dodaj.addEventListener('click', (e) => {
    e.preventDefault()

    const inputtext = document.querySelector("input[type='text']").value;
    const inputdate = document.querySelector("input[type='date']").value;

    if (inputtext.length == 0 || inputdate.length == 0) {
        return;
    }

    const row = `
        <tr>
            <td> ${inputtext} </td>
            <td> ${inputdate} </td>
            <td> <button class="btn-usun" onclick="deletetr()">USUŃ</button> </td>
        </tr>
    `

    const tabel = document.querySelector('table').value
    tabel.innerHTML += row

    localStorage.clear()
    localStorage.setItem("tabel", tabel)

    tabel.value = localStorage.getItem("tabel")

    document.querySelector("input[type='text']").value = ``
    document.querySelector("input[type='date']").value = ``

    for (let btn_usun of btns_usun) {
        btn_usun.addEventListener("click", (ev) => {
            btn_usun.parentElement.parentElement.remove()
        })
    }
})


