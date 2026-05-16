const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const database = [
    { emri: "Mariglen", mbiemri: "Hyseni", nid: "K80421023M", id: "262526600022" },
    { emri: "Serena", mbiemri: "Kokaj", nid: "K76231031M", id: "262526600021" },
    { emri: "Sibora", mbiemri: "Kola", nid: "K7029024N", id: "262526600012" },
    { emri: "Vjolentina", mbiemri: "Pjetri", nid: "K85820021N", id: "262526600005" },
    { emri: "Adenis", mbiemri: "Muça", nid: "K80510028A", id: "262526600029" }
];

// Hap index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Kerkimi i ID
app.post("/kerkoID", (req, res) => {

    const { emri, mbiemri, nid } = req.body;

    const studenti = database.find(
        s =>
            s.emri.toLowerCase() === emri.toLowerCase() &&
            s.mbiemri.toLowerCase() === mbiemri.toLowerCase() &&
            s.nid.toLowerCase() === nid.toLowerCase()
    );

    if (studenti) {
        res.json({
            success: true,
            message: "ID u gjet me sukses!",
            id: studenti.id
        });
    } else {
        res.json({
            success: false,
            message: "Nxënësi nuk u gjet!"
        });
    }
});

// PORT për Render
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log(`Serveri u ndez ne portin ${PORT}`);
});
