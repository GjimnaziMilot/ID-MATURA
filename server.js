const express = require("express");
const path = require("path");

const app = express();

// Middleware për të lexuar JSON dhe skedarët statikë
app.use(express.json());
app.use(express.static(__dirname));

const database = [
    { emri: "Mariglen", mbiemri: "Hyseni", nid: "K80421023M", id: "262526600022" },
    { emri: "Serena", mbiemri: "Kokaj", nid: "K76231031M", id: "262526600021" },
    { emri: "Sibora", mbiemri: "Kola", nid: "K7029024N", id: "262526600012" },
    { emri: "Vjolentina", mbiemri: "Pjetri", nid: "K85820021N", id: "262526600005" },
    { emri: "Adenis", mbiemri: "Muça", nid: "K80510028A", id: "262526600029" }
];

// Hap index.html në rrënjë (root)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Kërkimi i ID
app.post("/kerkoID", (req, res) => {
    const { emri, mbiemri, nid } = req.body;

    // Sigurohemi që inputet nuk janë boshe për të shmangur gabimet me .toLowerCase()
    if (!emri || !mbiemri || !nid) {
        return res.status(400).json({
            success: false,
            message: "Ju lutem plotësoni të gjitha fushat!"
        });
    }

    const studenti = database.find(
        s =>
            s.emri?.toLowerCase() === emri.trim().toLowerCase() &&
            s.mbiemri?.toLowerCase() === mbiemri.trim().toLowerCase() &&
            s.nid?.toLowerCase() === nid.trim().toLowerCase()
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

// PORT për Render (Default në 10000 nëse nuk jepet nga mjedisi)
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log(`Serveri u ndez në portin ${PORT}`);
});
