async function kerkoID() {

    const emri = document.getElementById("emri").value.trim();
    const mbiemri = document.getElementById("mbiemri").value.trim();
    const nid = document.getElementById("nid").value.trim();

    const rezultati = document.getElementById("rezultati");

    if (emri === "" || mbiemri === "" || nid === "") {

        rezultati.innerHTML = "Plotësoni të gjitha fushat!";
        return;
    }

    try {

        const response = await fetch("/kerko", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                emri,
                mbiemri,
                nid
            })
        });

        const data = await response.json();

        if (data.sukses) {

            rezultati.innerHTML =
                "ID e Maturës:<br><br>" + data.id;

        } else {

            rezultati.innerHTML =
                "Të dhënat nuk u gjetën!";
        }

    } catch (error) {

        rezultati.innerHTML =
            "Gabim në lidhje me serverin!";
    }
}
