const express = require("express");
const app = express();
app.use(express.json());

const database = [
    { emri: "Mariglen", mbiemri: "Hyseni", nid: "K80421023M", id: "262526600022" },
    { emri: "Serena", mbiemri: "Kokaj", nid: "K76231031M", id: "262526600021" },
    { emri: "Sibora", mbiemri: "Kola", nid: "K76029024N", id: "262526600012" },
    { emri: "Vjolentina", mbiemri: "Pjetri", nid: "K85820021N", id: "262526600005" },
    { emri: "Adenis", mbiemri: "Muçaj", nid: "K80510028A", id: "262526600029" },
    { emri: "Alesja", mbiemri: "Hysa", nid: "K75905078I", id: "262526600002" },
    { emri: "Arber", mbiemri: "Ahmeti", nid: "K80625031G", id: "262526600030" },
    { emri: "Ardit", mbiemri: "Veseli", nid: "K80104053I", id: "262526600032" },
    { emri: "Arlind", mbiemri: "Smaçi", nid: "K80418019P", id: "262526600007" },
    { emri: "Daniela", mbiemri: "Kolaj", nid: "K76122026U", id: "262526600035" },
    { emri: "Desarta", mbiemri: "Halili", nid: "K86203018H", id: "262526600037" },
    { emri: "Enxhi", mbiemri: "Kasmi", nid: "K85805018K", id: "262526600004" },
    { emri: "Ergys", mbiemri: "Allamani", nid: "K80501022W", id: "262526600018" },
    { emri: "Fabiona", mbiemri: "Kola", nid: "K85717067C", id: "262526600026" },
    { emri: "Flavjo", mbiemri: "Haxhiu", nid: "K80430027U", id: "262526600031" },
    { emri: "Gilda", mbiemri: "Hyseni", nid: "K85627018W", id: "262526600034" },
    { emri: "Kleanda", mbiemri: "Kola", nid: "K86018009I", id: "262526600001" },
    { emri: "Leandro", mbiemri: "Osmani", nid: "K81216033N", id: "262526600019" },
    { emri: "Leo", mbiemri: "Vokrri", nid: "K80721031M", id: "262526600008" },
    { emri: "Samuel", mbiemri: "Kasmi", nid: "K80614027P", id: "262526600039" },
    { emri: "Sindi", mbiemri: "Çupi", nid: "K86202014Q", id: "262526600010" },
    { emri: "Sindi", mbiemri: "Tafa", nid: "K85205031T", id: "262526600027" },
    { emri: "Smerald", mbiemri: "Veseli", nid: "K80407024T", id: "262526600033" }

];

app.post("/kerko", (req, res) => {

    const { emri, mbiemri, nid } = req.body;

    const maturanti = database.find(function(m){

        return (
            m.emri.toLowerCase() === emri.toLowerCase() &&
            m.mbiemri.toLowerCase() === mbiemri.toLowerCase() &&
            m.nid.toLowerCase() === nid.toLowerCase()
        );
    });

    if(maturanti){

        res.json({
            success: true,
            mesazh:
                "ID e Maturës:<br><br>" +
                maturanti.id
        });

    }else{

        res.json({
            success: false,
            mesazh:
                "Të dhënat nuk u gjetën!"
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("Serveri u ndez në portin " + PORT);
});
