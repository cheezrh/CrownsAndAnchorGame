var Face = require("./Face");
var Bet = require("./Bet");
var Mat = require("./Mat");

class CrownsAndAnchorGame {
    constructor() {
        let spadesFace = Face("Spades", 1, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F41svv%252Bq6qxL._SX425_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FSpade-Card-Suit-Symbol-Stamp%2Fdp%2FB01E7KWP10&docid=vWbjjHv6pXeBZM&tbnid=tTIqdv0EsZHS0M%3A&vet=10ahUKEwjrvMqvsOzhAhXFo1kKHR1ZBgcQMwhtKAIwAg..i&w=425&h=507&hl=en&bih=959&biw=958&q=Spade%20card&ved=0ahUKEwjrvMqvsOzhAhXFo1kKHR1ZBgcQMwhtKAIwAg&iact=mrc&uact=8");
        let diamondsFace = Face("Diamonds", 1, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.vectorstock.com%2Fi%2F1000x1000%2F76%2F25%2Fdiamond-suit-plying-card-icon-cartoon-style-vector-13947625.jpg&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fdiamond-suit-plying-card-icon-cartoon-style-vector-13947625&docid=DOwKWWOe6tSO_M&tbnid=zOhfBEj1I_L56M%3A&vet=10ahUKEwiPrJGbsOzhAhUDheAKHaDdDY0QMwiRASgDMAM..i&w=786&h=1080&hl=en&bih=959&biw=958&q=diamond%20card&ved=0ahUKEwiPrJGbsOzhAhUDheAKHaDdDY0QMwiRASgDMAM&iact=mrc&uact=8");
        let clubsFace = Face("Clubs", 1, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2012%2F04%2F18%2F21%2F27%2Fclubs-37934_960_720.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fvectors%2Fclubs-game-cards-club-play-37934%2F&docid=C4ZkZKIuey234M&tbnid=f0GxzXIO38hiSM%3A&vet=10ahUKEwip3JDOsOzhAhVJs1kKHSfkD9cQMwiNASgcMBw..i&w=725&h=720&hl=en&bih=959&biw=958&q=clubs%20card&ved=0ahUKEwip3JDOsOzhAhVJs1kKHSfkD9cQMwiNASgcMBw&iact=mrc&uact=8");
        let heartsFace = Face("Hearts", 1, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fdl2.macupdate.com%2Fimages%2Ficons256%2F4797.png%3Fd%3D1536055790&imgrefurl=http%3A%2F%2Fwww.macupdate.com%2Fapp%2Fmac%2F28564%2Fhearts&docid=JITvaP_dB2syWM&tbnid=JWD-Ot-AdqlzcM%3A&vet=10ahUKEwjWmei8sOzhAhXlguAKHfDuC7MQMwiLASgUMBQ..i&w=256&h=256&hl=en&bih=959&biw=958&q=hearts%20card&ved=0ahUKEwjWmei8sOzhAhXlguAKHfDuC7MQMwiLASgUMBQ&iact=mrc&uact=8");
        let crownsFace = Face("Crowns", 1, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Felement_origin_min_pic%2F17%2F07%2F30%2F8700c014e75552dcea051477182bbb83.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fyellow-gold-crown_3310229.html&docid=Txtn58DQWZWwuM&tbnid=H0DVKv3RwFf27M%3A&vet=10ahUKEwjfy4zesOzhAhUjiOAKHTjFCecQMwieASgTMBM..i&w=650&h=651&hl=en&bih=959&biw=958&q=crown&ved=0ahUKEwjfy4zesOzhAhUjiOAKHTjFCecQMwieASgTMBM&iact=mrc&uact=8");
        let anchorsFace = Face("Anchors", 1, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-vector%2Fvector-illustration-monochrome-sea-anchor-260nw-1086309203.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fanchor&docid=6EKy149c4pU2XM&tbnid=76cFPWZ9jUcAoM%3A&vet=10ahUKEwii4eXqsOzhAhVnvlkKHfQ4BKgQMwh0KAkwCQ..i&w=260&h=280&hl=en&bih=959&biw=958&q=anchor&ved=0ahUKEwii4eXqsOzhAhVnvlkKHfQ4BKgQMwh0KAkwCQ&iact=mrc&uact=8");

        let faces = [spadesFace, diamondsFace, clubsFace];

        faces.push(heartsFace);
        faces.push(crownsFace);
        faces.push(anchorsFace);

        this._mat = new Mat(faces);

        let spadesBet = New Bet(spadesFace, 0);
        let diamondsBet = New Bet(diamondsFace, 0);
        let clubsBet = New Bet(clubsFace, 0);
        let heartsBet = New Bet(heartsFace, 0);
        let crownsBet = New Bet(crownsFace, 0);
        let anchorsBet = New Bet(anchorsFace, 0);

        let bets = [spadesFace, diamondsFace, clubsFace, heartsFace, crownsFace, anchorsFace];

        this._beets = bets;

        let dice = [];
        dice.push(new Die(faces));
        dice.push(new Die(faces));
        dice.push(new Die(faces));

        this._gameState = 0;


        
    }

    get gameState() {
        return this._gameState;
    }
placeBet






    }
}











try {
    var myFace = new Face("Crown", 10, "https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/T31A1MPA66PT10X0Y6D1002938993S69PA29PT10X-10Y6B12%3A0%3A56%3A59%7CF61%3A93S100AMCx000000%7CF61%3A93S100AMCx000000Y10X40TRULES%7CF61%3A93S100AMCx000000Y22X40TWERE%7CF61%3A93S100AMCx000000Y34X40TMEANT%7CF61%3A93S100AMCx000000Y46X40TTO+BE%7CF61%3A93S100AMCx000000Y58X40TBROKEN%21%7C/views/3,width=100,height=100,appearanceId=1,backgroundColor=FFFFFF,noPt=true,version=1426103816/success-king-crown-mug.jpg");
    var myBet = new Bet(myFace, -5);
    var faces = [];

    faces.push(myFace);

    var myMat = new Mat(faces);

    myMat.faces
    console.log(`Im Betting ${myBet.betValue}`);
}
catch(err) {
        console.log(err.message);
        console.log(err.stack );
}
