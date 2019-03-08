function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

function doShuffle() {
	shuffle(data);

	var goodId = Math.floor(Math.random() * 4);

	var btn1 = document.getElementById('btn1');
	var btn2 = document.getElementById('btn2');
	var btn3 = document.getElementById('btn3');
	var btn4 = document.getElementById('btn4');

	btn1.innerHTML= data[0].Prenom + ' ' + data[0].Nom;
	btn2.innerHTML= data[1].Prenom + ' ' + data[1].Nom;
	btn3.innerHTML= data[2].Prenom + ' ' + data[2].Nom;
	btn4.innerHTML= data[3].Prenom + ' ' + data[3].Nom;
	return (goodId);
}

var data = [
	{
		"Prenom": "Adam",
		"Nom": "Faik",
		"EMAIL": "adam.faik@gadz.org",
		"phone": "+33695633115",
		"LinkedIn": "https://www.linkedin.com/in/adam-faik/",
		"Photos": "ADAMFAIK_0228.jpg (https://dl.airtable.com/.attachments/8327bac622512affdc5cd128afaa9ba6/6291bba3/ADAMFAIK_0228.jpg)",
		"@slack": "Adam Faik"
	},
	{
		"Prenom": "Aïssata",
		"Nom": "Kane",
		"EMAIL": "aissata@wemaintain.com",
		"phone": 680986848,
		"LinkedIn": "https://www.linkedin.com/in/aïssata-kane-53b381106/",
		"Photos": "AISSATAKANE_0288.jpg (https://dl.airtable.com/.attachments/62b8af797b60735582da8cdf0f91c614/27bffd1f/AISSATAKANE_0288.jpg)",
		"@slack": "Aïssata"
	},
	{
		"Prenom": "Alexandre",
		"Nom": "Binet",
		"EMAIL": "alexandre1.binet@epitech.eu",
		"phone": "+33 0778250888",
		"LinkedIn": "https://www.linkedin.com/in/alexandre-binet-6923205b",
		"Photos": "Alexandre Binet.png (https://dl.airtable.com/.attachments/5b09747cc950ee6a4c58e65f13c9feb6/923d0aad/AlexandreBinet.png)",
		"@slack": "Alexandre Binet"
	},
	{
		"Prenom": "Alexis",
		"Nom": "Beucher",
		"EMAIL": "abeucher@payplug.com",
		"phone": "+33664058161",
		"LinkedIn": "www.linkedin.com/in/alexis-beucher-825722133",
		"Photos": "ALEXISBEUCHER_0163.jpg (https://dl.airtable.com/.attachments/cee75754c0a27e1cd3110cab2a20b02a/93b9aea6/ALEXISBEUCHER_0163.jpg)",
		"@slack": "Alexis Beucher"
	},
	{
		"Prenom": "Aline",
		"Nom": "Le",
		"EMAIL": "le.aline10@outlook.com",
		"phone": "+33620567673",
		"LinkedIn": "http://linkedin.com/in/aline-le-731a45112",
		"Photos": "ALINELE_0017.jpg (https://dl.airtable.com/.attachments/1f0d6bcd545c1f73dae5829df10cc16a/20601b89/ALINELE_0017.jpg)",
		"@slack": "Aline Le"
	},
	{
		"Prenom": "Aliocha",
		"Nom": "Rozo",
		"EMAIL": "aliocha.rozo@gmail.com",
		"phone": 33634301136,
		"LinkedIn": "https://www.linkedin.com/in/aliocha-rozo-a6886b15",
		"Photos": "ALIOCHAROZO_0249.jpg (https://dl.airtable.com/.attachments/900a919c069f1a35a48d5ef29025395b/45988a5c/ALIOCHAROZO_0249.jpg)",
		"@slack": "Aliocha"
	},
	{
		"Prenom": "Amaury",
		"Nom": "Baot",
		"EMAIL": "amaurybaot@hotmail.com",
		"phone": "+33617977303",
		"LinkedIn": "https://www.linkedin.com/in/amaurybaot/",
		"Photos": "AMAURYBAOT_0165.jpg (https://dl.airtable.com/.attachments/f1981de2af9191df56593d1b9f28f688/d1114492/AMAURYBAOT_0165.jpg)",
		"@slack": "Amaury Baot"
	},
	{
		"Prenom": "Amin",
		"Nom": "Fehri",
		"EMAIL": "amin.fehri@gmail.com",
		"phone": "+33661500779",
		"LinkedIn": "https://www.linkedin.com/in/amin-fehri-866a0250/",
		"Photos": "AMINFEHRI_0198.jpg (https://dl.airtable.com/.attachments/19c44fe7f26eabaf1dddadc85e4fc50a/8657db1b/AMINFEHRI_0198.jpg)",
		"@slack": "Amin"
	},
	{
		"Prenom": "Antoine",
		"Nom": "Amant",
		"EMAIL": "antoine.amant@gmail.com",
		"phone": "+33 615409423",
		"LinkedIn": "https://www.linkedin.com/in/antoineamant/",
		"Photos": "Antoine Amant.jpg (https://dl.airtable.com/.attachments/39d7923b21d451f6c478ea75b6459bfa/337d762a/AntoineAmant.jpg)",
		"@slack": "Antoine Amant"
	},
	{
		"Prenom": "Antonin",
		"Nom": "Siguier",
		"EMAIL": "ansiguie@student.42.fr",
		"phone": "+33 6 79 19 91 89",
		"LinkedIn": "https://www.linkedin.com/in/antonin-siguier/",
		"Photos": "ANTONINSIGUIER_0064.jpg (https://dl.airtable.com/.attachments/b5b392183f6ee8e146d9ee170f155c6b/47cc88da/ANTONINSIGUIER_0064.jpg)",
		"@slack": "Antonin"
	},
	{
		"Prenom": "Apolline",
		"Nom": "Loison",
		"EMAIL": "apollineloison@gmail.com",
		"phone": "+33659558384",
		"LinkedIn": "https://www.linkedin.com/in/apollineloison/",
		"Photos": "APPOLINELOISON_0257.jpg (https://dl.airtable.com/.attachments/35e7f8d030605e9ad1033a354c2c9464/fcc605f3/APPOLINELOISON_0257.jpg)",
		"@slack": "Apolline"
	},
	{
		"Prenom": "Arthur",
		"Nom": "de Jerphanion",
		"EMAIL": "arthur.dejerphanion@gmail.com",
		"phone": "+33637801253",
		"LinkedIn": "https://www.linkedin.com/in/arthur-de-jerphanion-31203b41",
		"Photos": "ARTHURDEJERPHANION_0097.jpg (https://dl.airtable.com/.attachments/95b3b7b9559de62b6fbcb1a3023a434e/095283d5/ARTHURDEJERPHANION_0097.jpg)",
		"@slack": "Arthur"
	},
	{
		"Prenom": "Aude",
		"Nom": "Launay",
		"EMAIL": "aude@flexymoov.fr",
		"phone": "+33666648393",
		"LinkedIn": "https://www.linkedin.com/in/au2launay/",
		"Photos": "AUDELAUNAY_0485.jpg (https://dl.airtable.com/.attachments/8b1bec8091b337750302c679c7192392/6c6216e5/AUDELAUNAY_0485.jpg)",
		"@slack": ""
	},
	{
		"Prenom": "Aurelien",
		"Nom": "Ange",
		"EMAIL": "aurelien.ange@gmail.com",
		"phone": "+33665080819",
		"LinkedIn": "https://www.linkedin.com/in/benoit-decourt-5192177/",
		"Photos": "AURELIENANGE_0391.jpg (https://dl.airtable.com/.attachments/3e95960bdecd4190f3699025b254e5fd/43587704/AURELIENANGE_0391.jpg)",
		"@slack": "Aurel"
	},
	{
		"Prenom": "Axel",
		"Nom": "Dol",
		"EMAIL": "axel.dol@gmail.com",
		"phone": "+33650057915",
		"LinkedIn": "https://www.linkedin.com/in/axel-dol/",
		"Photos": "AXELDOL_0137.jpg (https://dl.airtable.com/.attachments/671a9bdeff842b6986334e28f0323407/1715c70f/AXELDOL_0137.jpg)",
		"@slack": "Axel Dol"
	},
	{
		"Prenom": "Benjamin",
		"Nom": "Cauchois",
		"EMAIL": "benjamin_cauchois@orange.fr",
		"phone": "+33 6 10 43 40 08",
		"LinkedIn": "https://www.linkedin.com/in/benjamin-cauchois/",
		"Photos": "BENJAMINCAUCHOIS_0079.jpg (https://dl.airtable.com/.attachments/362359e5097caf6c0ebe31d15588dd00/d79c3510/BENJAMINCAUCHOIS_0079.jpg)",
		"@slack": "Ben Cauchois"
	},
	{
		"Prenom": "Benjamin",
		"Nom": "Ejzenberg",
		"EMAIL": "benjamin.ejzenberg@gmail.com",
		"phone": 33601635285,
		"LinkedIn": "https://www.linkedin.com/in/benjaminejzenberg/",
		"Photos": "BENJAMINEJZENBERG_0320.jpg (https://dl.airtable.com/.attachments/760ddb6f1cdc0c6be74844caf3a1bdfc/5e616215/BENJAMINEJZENBERG_0320.jpg)",
		"@slack": "Benjamin"
	},
	{
		"Prenom": "Berenice",
		"Nom": "Gits",
		"EMAIL": "berenice.gits@gmail.com",
		"phone": "+33660985963",
		"LinkedIn": "https://www.linkedin.com/in/berenicegits/",
		"Photos": "BERENICEGITS_0089.jpg (https://dl.airtable.com/.attachments/ab1030d81380c46b7dc585affd1db5fa/03687498/BERENICEGITS_0089.jpg)",
		"@slack": "Berenice"
	},
	{
		"Prenom": "Bertrand",
		"Nom": "Domas",
		"EMAIL": "bertrand.domas@gmail.com",
		"phone": "+33647655733",
		"LinkedIn": "https://www.linkedin.com/in/bertranddomas/",
		"Photos": "BERTRANDDOMAS_0386.jpg (https://dl.airtable.com/.attachments/14745fc5c4ad68051f45991403b6b0e3/cfc08088/BERTRANDDOMAS_0386.jpg)",
		"@slack": "Bertrand Domas"
	},
	{
		"Prenom": "Bruno",
		"Nom": "Sautron",
		"EMAIL": "bruno@wemaintain.com",
		"phone": "+33 7 86 65 45 20",
		"LinkedIn": "https://www.linkedin.com/in/bsautron/",
		"Photos": "BRUNOSAUTRON_0409.jpg (https://dl.airtable.com/.attachments/9a2ce5c9b89217d350cd1ba80eb5cb22/a9756511/BRUNOSAUTRON_0409.jpg)",
		"@slack": "Bruno Sautron"
	},
	{
		"Prenom": "Camille",
		"Nom": "de Peretti",
		"EMAIL": "camilledeperetti10@gmail.com",
		"phone": "+33634520455",
		"LinkedIn": "https://www.linkedin.com/in/camille-de-peretti-90727683/",
		"Photos": "CAMILLEDEPERETTI_0144.jpg (https://dl.airtable.com/.attachments/cb55292a101841c850a6e720aef5c166/cf37106f/CAMILLEDEPERETTI_0144.jpg)",
		"@slack": "Camille DP"
	},
	{
		"Prenom": "Camille",
		"Nom": "Dorier",
		"EMAIL": "camilledorier@gmail.com",
		"phone": "+33663446881",
		"LinkedIn": "https://www.linkedin.com/in/camille-dorier-93b73564/",
		"Photos": "CAMILLEDORIER_0075.jpg (https://dl.airtable.com/.attachments/7d64a5bbcf72f101c039f5488f03635d/67502bec/CAMILLEDORIER_0075.jpg)",
		"@slack": "Camille Dorier"
	},
	{
		"Prenom": "Candice",
		"Nom": "Confesson",
		"EMAIL": "candiceconfesson@gmail.com",
		"phone": "+33777996196",
		"LinkedIn": "https://www.linkedin.com/in/candiceconfesson/",
		"Photos": "CANDICECONFESSON_0312.jpg (https://dl.airtable.com/.attachments/306163450acaacc1929ad452232c1e0a/bd9cdbf2/CANDICECONFESSON_0312.jpg)",
		"@slack": "Candice"
	},
	{
		"Prenom": "Celine",
		"Nom": "Gavage",
		"EMAIL": "ce.gavage@gmail.com",
		"phone": "+32478771575",
		"LinkedIn": "N/A",
		"Photos": "CELINEGAVAGE_0126.jpg (https://dl.airtable.com/.attachments/6528d5659cdd1c39fed21f539a69456e/eb190b20/CELINEGAVAGE_0126.jpg)",
		"@slack": "Celine"
	},
	{
		"Prenom": "Celine",
		"Nom": "Laplassotte",
		"EMAIL": "c.laplassotte@gmail.com",
		"phone": "+337680898888",
		"LinkedIn": "https://www.linkedin.com/in/laplassotteceline/",
		"Photos": "CELINELAPLASSOTTE_0428.jpg (https://dl.airtable.com/.attachments/25ddb92fe7ade1fa288f8be3e23d2bdf/23dd0938/CELINELAPLASSOTTE_0428.jpg)",
		"@slack": "Celine"
	},
	{
		"Prenom": "Chanhvilay",
		"Nom": "Quang",
		"EMAIL": "chanhvilay@wemaintain.com",
		"phone": "+33603863111",
		"LinkedIn": "N/A",
		"Photos": "CHANHVILAYQUANG_0327.jpg (https://dl.airtable.com/.attachments/53bb4f0df4fa13a02245ab757dc2cfd0/f9444c7a/CHANHVILAYQUANG_0327.jpg)",
		"@slack": "Chanvi"
	},
	{
		"Prenom": "Charlotte",
		"Nom": "Lazarus",
		"EMAIL": "charlotte.lazarus@hotmail.fr",
		"phone": "+33624737805",
		"LinkedIn": "www.linkedin.com/in/charlottelazarus",
		"Photos": "CHARLOTTE LAZARUS_0178.jpg (https://dl.airtable.com/.attachments/a65de7f443e12b31dcb1f6d3014cbc7e/ae268246/CHARLOTTELAZARUS_0178.jpg)",
		"@slack": "Charlotte"
	},
	{
		"Prenom": "Claire",
		"Nom": "Mignet",
		"EMAIL": "claire.mignet@gmail.com",
		"phone": "+33 684 554 935",
		"LinkedIn": "https://www.linkedin.com/in/claire-mignet-791967105/",
		"Photos": "CLAIREMIGNET_0185.jpg (https://dl.airtable.com/.attachments/e30b4aac983d8a9512ef24a047cedc67/5096a722/CLAIREMIGNET_0185.jpg)",
		"@slack": "Claire Mignet"
	},
	{
		"Prenom": "Claire",
		"Nom": "Paris",
		"EMAIL": "paris.claire@hotmail.com",
		"phone": "+33695490482",
		"LinkedIn": "http://linkedin.com/in/claire-paris-85971310",
		"Photos": "CLAIREPARIS_0412.jpg (https://dl.airtable.com/.attachments/56cf7a29600c1b57fb9dda316614fae2/a55c178c/CLAIREPARIS_0412.jpg)",
		"@slack": "Paris Claire"
	},
	{
		"Prenom": "Clemence",
		"Nom": "Vignalou",
		"EMAIL": "clemencevignalou@gmail.com",
		"phone": "+33633871085",
		"LinkedIn": "https://www.linkedin.com/in/studiovignalou/",
		"Photos": "CLEMENCEVIGNALOU_0075.jpg (https://dl.airtable.com/.attachments/75caaff67b2fb6f265290861008d1bfa/a9375277/CLEMENCEVIGNALOU_0075.jpg)",
		"@slack": "Clemence vignalou"
	},
	{
		"Prenom": "Clement",
		"Nom": "Pretre",
		"EMAIL": "clement.pretre@trusk.com",
		"phone": "+33698154966",
		"LinkedIn": "https://www.linkedin.com/in/cl%C3%A9ment-pretre/",
		"Photos": "Clement Pretre.jpg (https://dl.airtable.com/.attachments/be6bfe239fd1536ab98e67046133b458/6f0c386a/ClementPretre.jpg)",
		"@slack": "Clement P"
	},
	{
		"Prenom": "Cristina",
		"Nom": "Lima",
		"EMAIL": "cristinalimabarbosa@live.fr",
		"phone": 664714536,
		"LinkedIn": "https://www.linkedin.com/in/cristina-lima-100192/",
		"Photos": "CRISTALIMA_0167.jpg (https://dl.airtable.com/.attachments/65810bb7400b1d371012bd2d41ef5d50/9f1e9cd1/CRISTALIMA_0167.jpg)",
		"@slack": "Cristina"
	},
	{
		"Prenom": "David",
		"Nom": "Lam",
		"EMAIL": "dlam5@hotmail.com",
		"phone": "+33614456487",
		"LinkedIn": "https://www.linkedin.com/in/david-lam",
		"Photos": "DAVIDLAM_0454.jpg (https://dl.airtable.com/.attachments/c7975b48912790ba386999b9d20a7759/530a5b83/DAVIDLAM_0454.jpg)",
		"@slack": "David LAM"
	},
	{
		"Prenom": "Dylan",
		"Nom": "Foster",
		"EMAIL": "dylan@wemaintain.com",
		"phone": 619970793,
		"LinkedIn": "N/A",
		"Photos": "DYLANFOSTER_0154.jpg (https://dl.airtable.com/.attachments/6fe4c29a4954c9f2fe049d89372663fb/97a9d146/DYLANFOSTER_0154.jpg)",
		"@slack": "Dylan"
	},
	{
		"Prenom": "Etienne",
		"Nom": "Ageneau",
		"EMAIL": "etienne.age@gmail.com",
		"phone": "0033617944737",
		"LinkedIn": "https://www.linkedin.com/in/etienne-ageneau/",
		"Photos": "ETIENNEAGENEAU_0447.jpg (https://dl.airtable.com/.attachments/f1cf9d2e7bcf4b18262c18600b885d0a/5cab1805/ETIENNEAGENEAU_0447.jpg)",
		"@slack": "Etienne Ageneau"
	},
	{
		"Prenom": "Eugenie",
		"Nom": "Ly",
		"EMAIL": "eugenie_ly@hotmail.fr",
		"phone": 602383550,
		"LinkedIn": "http://linkedin.com/in/eugenie-ly-62365b11a",
		"Photos": "EUGENIELY_0324.jpg (https://dl.airtable.com/.attachments/fb6ef19980fd28aec851fc4df4cbc7ee/1b7c14eb/EUGENIELY_0324.jpg)",
		"@slack": ""
	},
	{
		"Prenom": "Fabien",
		"Nom": "Martins",
		"EMAIL": "fabien.martins@fretlink.com",
		"phone": "+33 7 62 35 70 38",
		"LinkedIn": "https://www.linkedin.com/in/fabien-martins/",
		"Photos": "FABIENMARTINS_0046.jpg (https://dl.airtable.com/.attachments/aeb4e3398db6d0acba007fffaa6629a3/1bdca679/FABIENMARTINS_0046.jpg)",
		"@slack": "Fabien Martins"
	},
	{
		"Prenom": "François",
		"Nom": "Thumerel",
		"EMAIL": "fthumerel@gmail.com",
		"phone": "+33674841757",
		"LinkedIn": "https://www.linkedin.com/in/fran%C3%A7ois-thumerel-17b93749/",
		"Photos": "FRANCOISTHUMEREL_0204.jpg (https://dl.airtable.com/.attachments/66e2c13d8301bde0b84beb6d3843adf8/62147ddf/FRANCOISTHUMEREL_0204.jpg)",
		"@slack": "Francois Thumerel"
	},
	{
		"Prenom": "Frederic",
		"Nom": "Berard",
		"EMAIL": "frederic.berard@essec.edu",
		"phone": "+33667424987",
		"LinkedIn": "https://www.linkedin.com/in/frederic-berard/",
		"Photos": "FREDERICBERARD_0036.jpg (https://dl.airtable.com/.attachments/19bf98f4ce8ab742c73f0aa8474d6171/545dba4d/FREDERICBERARD_0036.jpg)",
		"@slack": "Frederic"
	},
	{
		"Prenom": "Frederic",
		"Nom": "Chhean",
		"EMAIL": "chheanfrederic@gmail.com",
		"phone": "+33667085881",
		"LinkedIn": "https://fr.linkedin.com/in/fchhean",
		"Photos": "FREDERICCHHEAN_0162.jpg (https://dl.airtable.com/.attachments/6920f2caa62e3b6a75a64ebc90f2d7f7/24800c89/FREDERICCHHEAN_0162.jpg)",
		"@slack": ""
	},
	{
		"Prenom": "Gaetane",
		"Nom": "Tiako",
		"EMAIL": "g.tiako@gmail.com",
		"phone": "+33656750122",
		"LinkedIn": "https://www.linkedin.com/in/ga%C3%A9tane-tiako-0432797b/",
		"Photos": "GAETANETIAKO_0197.jpg (https://dl.airtable.com/.attachments/55b23a553e50f7c5e54e6b2bd647612c/ac3b3402/GAETANETIAKO_0197.jpg)",
		"@slack": "Gaetane"
	},
	{
		"Prenom": "Geoffrey",
		"Nom": "Merran",
		"EMAIL": "geoffrey.merran@gmail.com",
		"phone": "+33619434925",
		"LinkedIn": "https://www.linkedin.com/in/geoffrey-merran/",
		"Photos": "GEOFFREYMERRAN_0071.jpg (https://dl.airtable.com/.attachments/0482f3cd66640ffcef11055934920aa6/c1d34cb4/GEOFFREYMERRAN_0071.jpg)",
		"@slack": "Geoffrey"
	},
	{
		"Prenom": "Gilberte Danielle",
		"Nom": "Mfegue Koa",
		"EMAIL": "daniellekoa@yahoo.fr",
		"phone": "0033695876125",
		"LinkedIn": "https://www.linkedin.com/in/gilberte-danielle-mfegue-koa-b24891116/",
		"Photos": "GILBERTEMFEGUEKOA_0082.jpg (https://dl.airtable.com/.attachments/0fe5226f7dcc4dcff6d8a4ffccfa3455/604798fc/GILBERTEMFEGUEKOA_0082.jpg)",
		"@slack": "Dany-L"
	},
	{
		"Prenom": "Guillaume",
		"Nom": "Bourseau",
		"EMAIL": "gbo.bourseau@gmail.com",
		"phone": 763947913,
		"LinkedIn": "https://www.linkedin.com/in/guillaume-bourseau-563a0a76",
		"Photos": "GUILLAUMEBOURSEAU_0382.jpg (https://dl.airtable.com/.attachments/cda9eeccc24c0b467f4df6fcc451811a/f01187a5/GUILLAUMEBOURSEAU_0382.jpg)",
		"@slack": ""
	},
	{
		"Prenom": "Guillaume",
		"Nom": "Gendron",
		"EMAIL": "gendron.guillaume@gmail.com",
		"phone": "+33603826769",
		"LinkedIn": "https://www.linkedin.com/in/guillaumegendron/",
		"Photos": "GUILLAUMEGENDRON_0280.jpg (https://dl.airtable.com/.attachments/e67ce5ca2e4687627d52058393273f60/cdb45929/GUILLAUMEGENDRON_0280.jpg)",
		"@slack": "Yomie"
	},
	{
		"Prenom": "Helène",
		"Nom": "Picard",
		"EMAIL": "helenejo.picard@hotmail.com",
		"phone": "+33625052633",
		"LinkedIn": "https://www.linkedin.com/in/helène-picard/",
		"Photos": "HELENEPICARD_0112.jpg (https://dl.airtable.com/.attachments/49e58d49e04b942abb3360ecdea41855/4cfa6622/HELENEPICARD_0112.jpg)",
		"@slack": "Helène"
	},
	{
		"Prenom": "Iris",
		"Nom": "Panissier",
		"EMAIL": "iris.panissier@gmail.com",
		"phone": "+33627340452",
		"LinkedIn": "https://www.linkedin.com/in/irispanissier/",
		"Photos": "IRISPANISSIER_0264.jpg (https://dl.airtable.com/.attachments/5e3cd81a64cdab76796189a3531a1251/8b6c6311/IRISPANISSIER_0264.jpg)",
		"@slack": "Iris P."
	},
	{
		"Prenom": "Jacqueline",
		"Nom": "Chung",
		"EMAIL": "jchung18@outlook.fr",
		"phone": "+33643100632",
		"LinkedIn": "https://www.linkedin.com/in/jacqueline-chung-086ba482/",
		"Photos": "JACQUELINECHUNG_0260.jpg (https://dl.airtable.com/.attachments/b1c003138bd98a038e0747676f69843c/4c6122ce/JACQUELINECHUNG_0260.jpg)",
		"@slack": ""
	},
	{
		"Prenom": "Jean-Charles",
		"Nom": "Dewaele",
		"EMAIL": "jeancharles.dewaele@gmail.com",
		"phone": "+33609663198",
		"LinkedIn": "https://www.linkedin.com/in/jean-charles-dewaele-523b37106/",
		"Photos": "JEANCHARLESDEWAELE_0039.jpg (https://dl.airtable.com/.attachments/0393b8094e0bceeab063d49d20b0ef3b/c66f0ade/JEANCHARLESDEWAELE_0039.jpg)",
		"@slack": "JC"
	},
	{
		"Prenom": "Jessica",
		"Nom": "Tsang",
		"EMAIL": "jessica.tsang10@gmail.com",
		"phone": "+33601096201",
		"LinkedIn": "https://www.linkedin.com/in/jessica-tsang-29061817/",
		"Photos": "JESSICATSANG_0316.jpg (https://dl.airtable.com/.attachments/23326821b641afe91fe975fca5ecb5b3/0a65f6c5/JESSICATSANG_0316.jpg)",
		"@slack": "Jessica"
	},
	{
		"Prenom": "Jordan",
		"Nom": "Munoz",
		"EMAIL": "j1805@hotmail.com",
		"phone": "+3695369675",
		"LinkedIn": "https://www.linkedin.com/in/jordan-munoz-48b0ba57/",
		"Photos": "JORDANMUNOZ_0456.jpg (https://dl.airtable.com/.attachments/3f86b6083265d73def788dad49e8f4d9/2b4b48ae/JORDANMUNOZ_0456.jpg)",
		"@slack": "Jojo Loam"
	},
	{
		"Prenom": "Josephine",
		"Nom": "Sibille",
		"EMAIL": "josephine.sibille@gmail.com",
		"phone": "+33635143033",
		"LinkedIn": "https://www.linkedin.com/in/jos%C3%A9phine-sibille-44b1b7aa/",
		"Photos": "JOSEPHINESIBILLE_0067.jpg (https://dl.airtable.com/.attachments/5eef479214df5d210b7b2f8274ed3f27/3cf34a76/JOSEPHINESIBILLE_0067.jpg)",
		"@slack": "Josephine"
	},
	{
		"Prenom": "Julie",
		"Nom": "Robert",
		"EMAIL": "ajulierobert@gmail.com",
		"phone": "+33 6 74 62 74 50",
		"LinkedIn": "https://www.linkedin.com/in/julie-robert-50068194/",
		"Photos": "JULIEROBERT_0442.jpg (https://dl.airtable.com/.attachments/8e4d2b0034f987acdb409ad0da80b550/3bc0f980/JULIEROBERT_0442.jpg)",
		"@slack": "Julie R"
	},
	{
		"Prenom": "Julie",
		"Nom": "Chesseret",
		"EMAIL": "julie.chesseret@gmail.com",
		"phone": "+49 152 56 77 43 64",
		"LinkedIn": "https://www.linkedin.com/in/julie-chesseret/",
		"Photos": "JULIECHESSERET_0096.jpg (https://dl.airtable.com/.attachments/acdeb86b76d331bebb7433e280198dfa/8b94f46e/JULIECHESSERET_0096.jpg)",
		"@slack": "Julie Chesseret"
	},
	{
		"Prenom": "Julien",
		"Nom": "Aflalo",
		"EMAIL": "aflalojulien@gmail.com",
		"phone": "+33637488427",
		"LinkedIn": "https://www.linkedin.com/in/julienaflalo/",
		"Photos": "JULIENAFLATO_0432.jpg (https://dl.airtable.com/.attachments/957d3fa3940e6dd7f56334717b4f6eb2/d9a65dcb/JULIENAFLATO_0432.jpg)",
		"@slack": "Julien"
	},
	{
		"Prenom": "Julien",
		"Nom": "Karst",
		"EMAIL": "julien.karst@epitech.eu",
		"phone": "+33767806737",
		"LinkedIn": "https://www.linkedin.com/in/julienkarst/",
		"Photos": "JULIENKARST_0040.jpg (https://dl.airtable.com/.attachments/18aead5208547c6034df275d3942e763/374a2070/JULIENKARST_0040.jpg)",
		"@slack": "Julien Karst"
	},
	{
		"Prenom": "Julien",
		"Nom": "Parenti",
		"EMAIL": "parenti.julien@gmail.com",
		"phone": "+33626375509",
		"LinkedIn": "https://www.linkedin.com/in/julien-parenti-b772a8109/",
		"Photos": "JULIENPARENTI_0121.jpg (https://dl.airtable.com/.attachments/5f0fe0957f50560275d30a5390c80eab/f5ec8a43/JULIENPARENTI_0121.jpg)",
		"@slack": "jparenti"
	},
	{
		"Prenom": "Justine",
		"Nom": "Solignac",
		"EMAIL": "justine.solignac@essec.edu",
		"phone": "+33642583238",
		"LinkedIn": "https://www.linkedin.com/in/justinesolignac",
		"Photos": "JUSTINESOLIGNAC_0218.jpg (https://dl.airtable.com/.attachments/dd40e7fe3c7952856c8289911c73abbe/6dc967de/JUSTINESOLIGNAC_0218.jpg)",
		"@slack": "Justine"
	},
	{
		"Prenom": "Karim",
		"Nom": "Makhloufi",
		"EMAIL": "maclouf@gmail.com",
		"phone": "+33769462055",
		"LinkedIn": "https://www.linkedin.com/in/karimmakhloufi/",
		"Photos": "KARIMMAKHLOUFI_0230.jpg (https://dl.airtable.com/.attachments/36eeaccd226473b9b906749e672d7058/9e461465/KARIMMAKHLOUFI_0230.jpg)",
		"@slack": ""
	},
	{
		"Prenom": "Karine",
		"Nom": "Majdalani",
		"EMAIL": "karine.majdalani@gmail.com",
		"phone": "+33622360707",
		"LinkedIn": "https://www.linkedin.com/in/karine-majdalani-4b75202b/",
		"Photos": "KARINEMAJDALANI_0304.jpg (https://dl.airtable.com/.attachments/bab61304d4c8595c9339f12395cac298/c5ee28f9/KARINEMAJDALANI_0304.jpg)",
		"@slack": "Karinem"
	},
	{
		"Prenom": "Kevin",
		"Nom": "Nguyen",
		"EMAIL": "n.kikoane@gmail.com",
		"phone": "+33 6 36 70 25 32",
		"LinkedIn": "https://www.linkedin.com/in/kikoane/",
		"Photos": "KEVINNGUYEN_0031.jpg (https://dl.airtable.com/.attachments/b66bc9393f396f03546cf805b429f707/407a968f/KEVINNGUYEN_0031.jpg)",
		"@slack": "Kevin"
	},
	{
		"Prenom": "Laetitia",
		"Nom": "Limat",
		"EMAIL": "limatlaetitia@gmail.com",
		"phone": 674811480,
		"LinkedIn": "https://www.linkedin.com/in/laetitia-limat-23aa1a90/",
		"Photos": "LAETITIALIMAT_0241.jpg (https://dl.airtable.com/.attachments/6bc3951b815c23529346f7e74d9d8bfe/e896c479/LAETITIALIMAT_0241.jpg)",
		"@slack": "Laetitia Lmt"
	},
	{
		"Prenom": "Laetitia",
		"Nom": "Riachi",
		"EMAIL": "laetitiariachi@gmail.com",
		"phone": "(068) 443-6553",
		"LinkedIn": "www.linkedin.com/in/laetitiariachi",
		"Photos": "LAETITIARIACHI_0298.jpg (https://dl.airtable.com/.attachments/f61a1908f35a89984ac23632c839363e/103eda6d/LAETITIARIACHI_0298.jpg)",
		"@slack": "Laetitia"
	},
	{
		"Prenom": "Laurença",
		"Nom": "d'Orey",
		"EMAIL": "laudorey@gmail.com",
		"phone": "+ 44 7 947 742 806",
		"LinkedIn": "https://www.linkedin.com/in/laurença-d-orey-033b0462/",
		"Photos": "LAURENCAD'OREY_0061.jpg (https://dl.airtable.com/.attachments/6ffb7a160057ca56df688b10c2071277/80cbb079/LAURENCADOREY_0061.jpg)",
		"@slack": "Laurença d'Orey"
	},
	{
		"Prenom": "Laurie",
		"Nom": "Barbarin",
		"EMAIL": "laurie.barbarin@inria.fr",
		"phone": "+33 6 80 14 78 78",
		"LinkedIn": "https://www.linkedin.com/in/laurie-barbarin/",
		"Photos": "LAURIEBARBARIN_LARENTRELION_0136.jpg (https://dl.airtable.com/.attachments/40d3742ad36101ae3df7a64d1443e087/12311f55/LAURIEBARBARIN_LARENTRELION_0136.jpg)",
		"@slack": "Laurie"
	},
	{
		"Prenom": "Leonore",
		"Nom": "Frydman",
		"EMAIL": "leonore.frydman@gmail.com",
		"phone": "+33679642002",
		"LinkedIn": "https://www.linkedin.com/in/l%C3%A9onore-frydman-3b777256/",
		"Photos": "LEONOREFRYDMAN_0211.jpg (https://dl.airtable.com/.attachments/729fae8447024cabc6040e1f9c24486b/57e96fb1/LEONOREFRYDMAN_0211.jpg)",
		"@slack": "Leonore"
	},
	{
		"Prenom": "Lewis",
		"Nom": "Benhammou",
		"EMAIL": "lewisbenhammou@gmail.com",
		"phone": "06 85 96 60 69",
		"LinkedIn": "https://www.linkedin.com/in/lewisbenhammou/",
		"Photos": "LEWISBENHAMMOU_0172.jpg (https://dl.airtable.com/.attachments/c1513fd6923834d0a8c3ffea31acd6f5/03825aef/LEWISBENHAMMOU_0172.jpg)",
		"@slack": "Lewis benhammou"
	},
	{
		"Prenom": "Louis",
		"Nom": "Monsaingeon",
		"EMAIL": "louis.monsaingeon@edhec.com",
		"phone": "+33665461081",
		"LinkedIn": "www.linkedin.com/in/louis-monsaingeon",
		"Photos": "LOUISMONSAINGEON_0224.jpg (https://dl.airtable.com/.attachments/e5adc296bef3ee604c54332e36dc7ec4/4600954d/LOUISMONSAINGEON_0224.jpg)",
		"@slack": "Louis Monsaingeon"
	},
	{
		"Prenom": "Lyes",
		"Nom": "Bounemer",
		"EMAIL": "Lyes.bounemer@gmail.com",
		"phone": "+33678204486",
		"LinkedIn": "www.linkedin.com/in/lyèsbounemer",
		"Photos": "LYESBOUNEMER_0407.jpg (https://dl.airtable.com/.attachments/1437b128f83b6e6b61057b72bf959414/3040a681/LYESBOUNEMER_0407.jpg)",
		"@slack": "Lyès"
	},
	{
		"Prenom": "Mahuton",
		"Nom": "Possoupe",
		"EMAIL": "bpossoupe@gmail.com",
		"phone": "+33751459281",
		"LinkedIn": "https://www.linkedin.com/in/bienvenupossoupe/",
		"Photos": "MAHUTONPOSSOUPE_0332.jpg (https://dl.airtable.com/.attachments/4493d06b628068f79405470fabe6251c/6df94315/MAHUTONPOSSOUPE_0332.jpg)",
		"@slack": "Mahuton"
	},
	{
		"Prenom": "Malo",
		"Nom": "Beaudouin",
		"EMAIL": "malo.beaudouin@gmail.com",
		"phone": "+336.85.34.16.93",
		"LinkedIn": "https://www.linkedin.com/in/malobeaudouin/",
		"Photos": "MALOBEAUDOUIN_0107.jpg (https://dl.airtable.com/.attachments/3f16bca4dd44b39c5f2a21f35d89afc3/d0b37e05/MALOBEAUDOUIN_0107.jpg)",
		"@slack": "Malo Beaudouin"
	},
	{
		"Prenom": "Manon",
		"Nom": "Arnaud",
		"EMAIL": "manonarnaud01@gmail.com",
		"phone": "+33631120168",
		"LinkedIn": "https://www.linkedin.com/in/manonarnaud/",
		"Photos": "MANONARNAUD_0142.jpg (https://dl.airtable.com/.attachments/c322a6a2dfd454bfc94d1144f49ee68c/e05e2abd/MANONARNAUD_0142.jpg)",
		"@slack": "Manon"
	},
	{
		"Prenom": "Marcus",
		"Nom": "Lehembre",
		"EMAIL": "marcus.lehembre@gmail.com",
		"phone": "+33648055854",
		"LinkedIn": "https://www.linkedin.com/in/marcuslehembre/",
		"Photos": "MARCUSLEHEMBRE_0116.jpg (https://dl.airtable.com/.attachments/cdbea79df175d443cea7c5c303fd49fa/ee34866c/MARCUSLEHEMBRE_0116.jpg)",
		"@slack": "marcus"
	},
	{
		"Prenom": "Maria",
		"Nom": "Rubio",
		"EMAIL": "rubioriano.maria@gmail.com",
		"phone": "+33 676 98 19 97",
		"LinkedIn": "https://www.linkedin.com/in/maria-rubio/",
		"Photos": "MARIARUBIO_0132.jpg (https://dl.airtable.com/.attachments/0ad5ef8440584b576224955d91f8f53e/309204bb/MARIARUBIO_0132.jpg)",
		"@slack": "Maria"
	},
	{
		"Prenom": "Mathias",
		"Nom": "Mourad",
		"EMAIL": "mathias.mourad@kedgebs.com",
		"phone": "+33668482823",
		"LinkedIn": "https://www.linkedin.com/in/mathias-mourad-640a96116/",
		"Photos": "MATHIASMOURAD_0429.jpg (https://dl.airtable.com/.attachments/edc36a3fee8121f02047142c946cd710/23288e07/MATHIASMOURAD_0429.jpg)",
		"@slack": "Mathias"
	},
	{
		"Prenom": "Mathieu",
		"Nom": "Royer",
		"EMAIL": "mathieu.royer@epitech.eu",
		"phone": "+33622864052",
		"LinkedIn": "https://www.linkedin.com/in/mathieu-royer/",
		"Photos": "MATHIEUROYER_0069.jpg (https://dl.airtable.com/.attachments/eed6ba4ce57f01dde0f43c844da09b9d/30e9324b/MATHIEUROYER_0069.jpg)",
		"@slack": "Mathieu Royer"
	},
	{
		"Prenom": "Mathilde",
		"Nom": "Gailledreau",
		"EMAIL": "mgailledreau@gmail.com",
		"phone": "+33 6 48 76 21 54",
		"LinkedIn": "https://www.linkedin.com/in/mathilde-gailledreau/",
		"Photos": "MATHILDEGAILLEDREAU_0363.jpg (https://dl.airtable.com/.attachments/87375383ad69e57064553d96fd8ce5ac/a609d8c4/MATHILDEGAILLEDREAU_0363.jpg)",
		"@slack": "Mathilde G"
	},
	{
		"Prenom": "Mathilde",
		"Nom": "Gomez",
		"EMAIL": "mathilde.gomez@essec.edu",
		"phone": "+ 33 6 27 78 66 40",
		"LinkedIn": "https://www.linkedin.com/in/mathilde-gomez/",
		"Photos": "MATHILDEGOMEZ_0099.jpg (https://dl.airtable.com/.attachments/48211912bdc5e864c4a23adb7174f1a6/d24f0fde/MATHILDEGOMEZ_0099.jpg)",
		"@slack": "Mathilde"
	},
	{
		"Prenom": "Matteo",
		"Nom": "Mervoyer",
		"EMAIL": "matteo.merv@gmail.com",
		"phone": "+33649849767",
		"LinkedIn": "https://www.linkedin.com/in/matteo-mervoyer/",
		"Photos": "MATTEOMERVOYER_0107.jpg (https://dl.airtable.com/.attachments/25e08e9a38170419acb9bd9d65582022/7056b1eb/MATTEOMERVOYER_0107.jpg)",
		"@slack": "matteo"
	},
	{
		"Prenom": "Melanie",
		"Nom": "Hewawasan",
		"EMAIL": "melaniehewawasan@gmail.com",
		"phone": "+33 6 51 49 07 79",
		"LinkedIn": "https://www.linkedin.com/in/m%C3%A9lanie-hewawasan-aa9b36114/",
		"Photos": "MELANIEHEWAWASAN_0029.jpg (https://dl.airtable.com/.attachments/13a50aa1a3d098662fabc3f0b4db5afd/3bbe8345/MELANIEHEWAWASAN_0029.jpg)",
		"@slack": "Melanie"
	},
	{
		"Prenom": "Meriem",
		"Nom": "Jlaidi",
		"EMAIL": "meriemchrifa@gmail.com",
		"phone": "+33762785147",
		"LinkedIn": "https://www.linkedin.com/in/meriem-jlaidi/",
		"Photos": "MERIEMJLAIDI_0233.jpg (https://dl.airtable.com/.attachments/cb22f26163d3a4207ba08d38783b338c/1cb84a09/MERIEMJLAIDI_0233.jpg)",
		"@slack": "Meriem"
	},
	{
		"Prenom": "Meryem",
		"Nom": "Salami",
		"EMAIL": "meryem.salami@outlook.fr",
		"phone": "+33634155168",
		"LinkedIn": "https://www.linkedin.com/in/meryem-salami/",
		"Photos": "Meryem Salami.jpg (https://dl.airtable.com/.attachments/c59a086829f76769fcad52ea6e759acb/cc77ea04/MeryemSalami.jpg)",
		"@slack": "Meryem Salami"
	},
	{
		"Prenom": "Michele",
		"Nom": "Bentata",
		"EMAIL": "michelebentata@free.fr",
		"phone": "+33661204940",
		"LinkedIn": "http://linkedin.com/in/michele-bentata-287861",
		"Photos": "MICHELEBENTATA_0436.jpg (https://dl.airtable.com/.attachments/934b2bdee20a3aed4273ebafdcd4d896/ec4c3805/MICHELEBENTATA_0436.jpg)",
		"@slack": ""
	},
	{
		"Prenom": "Mohammed",
		"Nom": "El Bojaddaini",
		"EMAIL": "melboja@gmail.com",
		"phone": "+33652385067",
		"LinkedIn": "https://www.linkedin.com/in/melboja/",
		"Photos": "MOHAMEMEDELBOJADDAINI_0115.jpg (https://dl.airtable.com/.attachments/9bb3600bd210c3666c22eb39a36d6d28/770ef775/MOHAMEMEDELBOJADDAINI_0115.jpg)",
		"@slack": "Mohammed"
	},
	{
		"Prenom": "Mounder",
		"Nom": "Yousfi",
		"EMAIL": "mounder@comet.co",
		"phone": "+33658827990",
		"LinkedIn": "https://www.linkedin.com/in/mounder-yousfi-3b619444/",
		"Photos": "MOUNDERYOUSFI_0371.jpg (https://dl.airtable.com/.attachments/243c874524c63b742ea3b3156b4ba765/23b1ea64/MOUNDERYOUSFI_0371.jpg)",
		"@slack": "Mounder"
	},
	{
		"Prenom": "Nemo",
		"Nom": "Fazakerley",
		"EMAIL": "nemofazakerley@gmail.com",
		"phone": "(068) 588-3931",
		"LinkedIn": "https://www.linkedin.com/in/nemo-fazakerley-367779151/",
		"Photos": "Nemo Fazakerley.jpg (https://dl.airtable.com/.attachments/6c4223043a646fc63e5543f3d0bc4a63/0f1ab8c5/NemoFazakerley.jpg)",
		"@slack": "Nemo Fazakerley"
	},
	{
		"Prenom": "Nour",
		"Nom": "Ben Hassen",
		"EMAIL": "Nour.benhassen@gmail.com",
		"phone": "+33662982560",
		"LinkedIn": "https://www.linkedin.com/in/nour-ben-hassen-381ab382/",
		"Photos": "NOURBENHASSEN_0357.jpg (https://dl.airtable.com/.attachments/06f999682c578fd397ae4a4619ddf50d/712391c6/NOURBENHASSEN_0357.jpg)",
		"@slack": "Nour Ben Hassen"
	},
	{
		"Prenom": "Paula",
		"Nom": "Castejon",
		"EMAIL": "p.castejon@gmail.com",
		"phone": "+33652196064",
		"LinkedIn": "https://www.linkedin.com/in/pcastejon/",
		"Photos": "PAULACASTEJON_0285.jpg (https://dl.airtable.com/.attachments/1ae00d913abca509cca771473b7c54a2/a2c860c9/PAULACASTEJON_0285.jpg)",
		"@slack": "Paula"
	},
	{
		"Prenom": "Philippine",
		"Nom": "Raulin",
		"EMAIL": "philippine.raulin@gmail.com",
		"phone": "+33 6 85 55 08 32",
		"LinkedIn": "https://www.linkedin.com/in/philippineraulin/",
		"Photos": "PHILIPPINERAULIN_0364.jpg (https://dl.airtable.com/.attachments/d7cadd6c4abe73b796ff61553fdb40ef/b1902908/PHILIPPINERAULIN_0364.jpg)",
		"@slack": "Philippine Raulin"
	},
	{
		"Prenom": "Pierre",
		"Nom": "Dubail",
		"EMAIL": "p.dubail@hotmail.fr",
		"phone": 33651330708,
		"LinkedIn": "https://www.linkedin.com/in/pierre-dubail-47853259/",
		"Photos": "PIERREDUBAIL_0448.jpg (https://dl.airtable.com/.attachments/5e2246db900847fc4ec3e5d48004e6c0/35c7cb51/PIERREDUBAIL_0448.jpg)",
		"@slack": "Pierre Dubail"
	},
	{
		"Prenom": "Pierre",
		"Nom": "Oreistein",
		"EMAIL": "pierre.oreistein@eleves.enpc.fr",
		"phone": "+33778145251",
		"LinkedIn": "https://www.linkedin.com/in/pierre-oreistein/",
		"Photos": "PIERREOREISTEIN_0149.jpg (https://dl.airtable.com/.attachments/5031ac87ae5fbb6b3cd63562be49709b/64ddddfe/PIERREOREISTEIN_0149.jpg)",
		"@slack": "Pierre O."
	},
	{
		"Prenom": "Pierre-Jean",
		"Nom": "Martin",
		"EMAIL": "pj-martin@outlook.fr",
		"phone": "+33628174157",
		"LinkedIn": "https://www.linkedin.com/in/pierre-jean-martin-59a64ab2/",
		"Photos": "PIERREJEANMARTIN_0033.jpg (https://dl.airtable.com/.attachments/af68ac7eb87b2b7f03d58b3b77a0b9c0/8eab30c7/PIERREJEANMARTIN_0033.jpg)",
		"@slack": "Pierre-Jean Martin"
	},
	{
		"Prenom": "Pierre-Marie",
		"Nom": "Derouin",
		"EMAIL": "pmderouin@outlook.com",
		"phone": "+33695761568",
		"LinkedIn": "www.linkedin.com/in/pmderouininnovationstrategy",
		"Photos": "PIERREMARIEDEROUIN_0374.jpg (https://dl.airtable.com/.attachments/18aca1d9d6e7d07e31d3a73758db4d7c/875c5498/PIERREMARIEDEROUIN_0374.jpg)",
		"@slack": "Pierre-Marie"
	},
	{
		"Prenom": "Quentin",
		"Nom": "Huard",
		"EMAIL": "huard.quentin@gmail.com",
		"phone": "+33762004395",
		"LinkedIn": "https://www.linkedin.com/in/quentinhuard",
		"Photos": "QUENTINHUARD_0384.jpg (https://dl.airtable.com/.attachments/d350a1f34b08173d02a2fdf4dcdcab99/4de709f3/QUENTINHUARD_0384.jpg)",
		"@slack": "Quentin / ActiveWorker"
	},
	{
		"Prenom": "Raphael",
		"Nom": "Nahum",
		"EMAIL": "raphael.nahum@gmail.com",
		"phone": "'+33(06)74 41-6589",
		"LinkedIn": "https://www.linkedin.com/in/rnahum/",
		"Photos": "RAPHAELNAHUM_0154.jpg (https://dl.airtable.com/.attachments/fc04096002eac47bbceccb1e593f702b/6eff020e/RAPHAELNAHUM_0154.jpg)",
		"@slack": "Raphaël"
	},
	{
		"Prenom": "Raphael",
		"Nom": "Ronot",
		"EMAIL": "raphael.ronot@protonmail.com",
		"phone": "(+33)0686763691",
		"LinkedIn": "https://www.linkedin.com/in/raphaelronot/",
		"Photos": "RAPHAELRONOT_0042.jpg (https://dl.airtable.com/.attachments/e7ab9623522eaae2bfe7872e190bd274/6c8bca68/RAPHAELRONOT_0042.jpg)",
		"@slack": "Raphael Ronot"
	},
	{
		"Prenom": "Raphaëlle",
		"Nom": "Lanfranconi",
		"EMAIL": "raphaelle.lanfranconi@essec.edu",
		"phone": "+33609130385",
		"LinkedIn": "https://www.linkedin.com/in/rapha%C3%ABlle-lanfranconi-bb836344/",
		"Photos": "REPHAELLELANFRANCONI_0176.jpg (https://dl.airtable.com/.attachments/a9bc4bfc95c295bd78afb496677f7625/6b07940c/REPHAELLELANFRANCONI_0176.jpg)",
		"@slack": "RaphLanf"
	},
	{
		"Prenom": "Remi",
		"Nom": "Soubigou",
		"EMAIL": "soubigou.remi@gmail.com",
		"phone": "+353876052413",
		"LinkedIn": "www.linkedin.com/in/remisoubigou",
		"Photos": "REMISOUBIGOU_0059.jpg (https://dl.airtable.com/.attachments/09dcb1272aadbf233980a9e80639a472/784b275e/REMISOUBIGOU_0059.jpg)",
		"@slack": "Soubigou Remi"
	},
	{
		"Prenom": "Rija",
		"Nom": "Rajohnson",
		"EMAIL": "rija.rajohnson@gmail.com",
		"phone": "+33608162983",
		"LinkedIn": "https://www.linkedin.com/in/rijarajohnson/",
		"Photos": "RIJARAJOHNSON_0336.jpg (https://dl.airtable.com/.attachments/8f2b748fdabf9a3e80f7ba0790c81ed6/02ea30e6/RIJARAJOHNSON_0336.jpg)",
		"@slack": "Rija Rajohnson"
	},
	{
		"Prenom": "Sabine",
		"Nom": "Alaguillaume",
		"EMAIL": "sabine.alag@gmail.com",
		"phone": "+33660098834",
		"LinkedIn": "https://fr.linkedin.com/in/sabine-alaguillaume-24463547",
		"Photos": "SABINEALAGUILLAUME_0272.jpg (https://dl.airtable.com/.attachments/89a533f7d7a5e51b3fd219542909aa30/d12b7cb7/SABINEALAGUILLAUME_0272.jpg)",
		"@slack": "sabine ALAGUILLAUME"
	},
	{
		"Prenom": "Samy",
		"Nom": "Dries",
		"EMAIL": "sam.dries@live.fr",
		"phone": "(076) 177-9652",
		"LinkedIn": "https://fr.linkedin.com/in/samy-dries-5991b595",
		"Photos": "SAMYDRIES_0268.jpg (https://dl.airtable.com/.attachments/1f7da152fade9a17ac255ca1b079d59e/e9438884/SAMYDRIES_0268.jpg)",
		"@slack": "Samy"
	},
	{
		"Prenom": "Sandrine",
		"Nom": "Marchesin",
		"EMAIL": "marchesin_sandrine@yahoo.fr",
		"phone": "+33620601649",
		"LinkedIn": "https://www.linkedin.com/in/sandrinemarchesin",
		"Photos": "SANDRINEMARCHESIN_0423.jpg (https://dl.airtable.com/.attachments/736a1e8a1967c4953b9d57586579c018/1b4c26f3/SANDRINEMARCHESIN_0423.jpg)",
		"@slack": "Sandrine"
	},
	{
		"Prenom": "Sara",
		"Nom": "Zumbiehl Guillaume",
		"EMAIL": "guillaume.sara@gmail.com",
		"phone": 621366366,
		"LinkedIn": "https://www.linkedin.com/in/sara-guillaume-zumbiehl-4351708/",
		"Photos": "SARAZUMBIEHLGUILLAUME_0349.jpg (https://dl.airtable.com/.attachments/f59313f60955bec545ce087522e17059/99302340/SARAZUMBIEHLGUILLAUME_0349.jpg)",
		"@slack": "Sara"
	},
	{
		"Prenom": "Sethy",
		"Nom": "Montan",
		"EMAIL": "sethy.montan@gmail.com",
		"phone": "(+33)613097145",
		"LinkedIn": "https://www.linkedin.com/in/smontan",
		"Photos": "SETHYMONTAN_0416.jpg (https://dl.airtable.com/.attachments/0c77be2dde90a5609ca81677a73c17dc/3c1b9109/SETHYMONTAN_0416.jpg)",
		"@slack": "Sethy"
	},
	{
		"Prenom": "Shiraz",
		"Nom": "Kittelberger-Buehlbecker",
		"EMAIL": "buehlbeckershiraz@gmail.com",
		"phone": "+33677781378",
		"LinkedIn": "https://www.linkedin.com/in/shiraz-b%C3%BChlbecker-034aa0a5/",
		"Photos": "SHIRAZKITTELBERGE0346.jpg (https://dl.airtable.com/.attachments/7947d64bcedd71215b762de918e02398/d2e8c003/SHIRAZKITTELBERGE0346.jpg)",
		"@slack": "Shiraz Estelle"
	},
	{
		"Prenom": "Sixtine",
		"Nom": "Caspar-Fille-Lambie",
		"EMAIL": "sixcaspar@gmail.com",
		"phone": "+33626161463",
		"LinkedIn": "https://www.linkedin.com/in/sixtine-caspar-fille-lambie-b89a4352/",
		"Photos": "SIXTINECASPARFILLELAMBIE0292.jpg (https://dl.airtable.com/.attachments/14ceb97c76363df637bf4bc29b75481f/554b6d7a/SIXTINECASPARFILLELAMBIE0292.jpg)",
		"@slack": "Sixtine_c"
	},
	{
		"Prenom": "Stephane",
		"Nom": "du Breuil",
		"EMAIL": "stephane-du-breuil@hotmail.fr",
		"phone": "+33675017961",
		"LinkedIn": "https://www.linkedin.com/in/stephane-du-breuil-13b75418/",
		"Photos": "STEPHANEDUBREUIL_0379.jpg (https://dl.airtable.com/.attachments/f3ca92f0046b945b80f4cad5ed639628/9607e2c5/STEPHANEDUBREUIL_0379.jpg)",
		"@slack": "Stephane du breuil"
	},
	{
		"Prenom": "Thibaut",
		"Nom": "Oury",
		"EMAIL": "tibo.oury@gmail.com",
		"phone": "+33663283034",
		"LinkedIn": "https://www.linkedin.com/in/thibaut-oury-961291103/",
		"Photos": "THIBAUTOURY_0247.jpg (https://dl.airtable.com/.attachments/f2dd36a7d53ba6a57b709f74712e2162/e84dbab4/THIBAUTOURY_0247.jpg)",
		"@slack": "Tibo"
	},
	{
		"Prenom": "Thomas",
		"Nom": "Welsch",
		"EMAIL": "hello.twelsch@gmail.com",
		"phone": "+33683874648",
		"LinkedIn": "https://www.linkedin.com/in/thomas-welsch-53b41812/",
		"Photos": "THOMASWELCH_0158.jpg (https://dl.airtable.com/.attachments/f770cbba3dd74aca8a9da89c6e799a7d/38c27c00/THOMASWELCH_0158.jpg)",
		"@slack": "Thomas"
	},
	{
		"Prenom": "Tony",
		"Nom": "Berthome",
		"EMAIL": "tberthome.pro@gmail.com",
		"phone": "+33 6 69 01 39 44",
		"LinkedIn": "https://www.linkedin.com/in/tonyberthome/",
		"Photos": "TONYBERTHOME_0400.jpg (https://dl.airtable.com/.attachments/06d8fb3e6c968682ab5517e10fa7a00f/c03f35c7/TONYBERTHOME_0400.jpg)",
		"@slack": "Tony Berthome"
	},
	{
		"Prenom": "Victor",
		"Nom": "Lemay",
		"EMAIL": "victorlemay@gmail.com",
		"phone": "+33618572719",
		"LinkedIn": "https://www.linkedin.com/in/victor-lemay-64918778/",
		"Photos": "VICTORLEMAY_0190.jpg (https://dl.airtable.com/.attachments/180e8daf0c9ed72ea5feddde68453568/0fe67adb/VICTORLEMAY_0190.jpg)",
		"@slack": "Victor"
	},
	{
		"Prenom": "Vincent",
		"Nom": "Hurbourque",
		"EMAIL": "vokvince@gmail.com",
		"phone": "+33687845916",
		"LinkedIn": "https://www.linkedin.com/in/vincent-hurbourque-63a5b331/",
		"Photos": "VINCENTHURBOURQUE_0305.jpg (https://dl.airtable.com/.attachments/0370f44c57310b4d63b2b4238fa57d86/d0f98267/VINCENTHURBOURQUE_0305.jpg)",
		"@slack": "Vincent"
	},
	{
		"Prenom": "Yaël",
		"Nom": "Guilloux",
		"EMAIL": "yael.guilloux@gmail.com",
		"phone": "+33664537218",
		"LinkedIn": "https://www.linkedin.com/in/yaelguilloux/",
		"Photos": "YAELGUILLOUX0053.jpg (https://dl.airtable.com/.attachments/8f2d6bb561326cb437a186bc8774e354/6dd75d5b/YAELGUILLOUX0053.jpg)",
		"@slack": "Yaël GUILLOUX"
	},
	{
		"Prenom": "Yann",
		"Nom": "Spigolis",
		"EMAIL": "yann.spigolis@gmail.com",
		"phone": "+33622970384",
		"LinkedIn": "https://www.linkedin.com/in/yann-spigolis-43894b61/",
		"Photos": "YANNSPIGOLIS_0086.jpg (https://dl.airtable.com/.attachments/06f6689221ca1b48692f3594722d488c/a388f5b2/YANNSPIGOLIS_0086.jpg)",
		"@slack": "Yann"
	},
	{
		"Prenom": "Yoann",
		"Nom": "Cloarec",
		"EMAIL": "yoann@alterfood.fr",
		"phone": "+33632922907",
		"LinkedIn": "https://www.linkedin.com/in/yoann-cloarec/",
		"Photos": "YOANNCLOAREC_0396.jpg (https://dl.airtable.com/.attachments/345bd4995c1d4b7a5e1b4212127fba59/4bf7196b/YOANNCLOAREC_0396.jpg)",
		"@slack": "Yoann Cloarec"
	},
	{
		"Prenom": "Zineb",
		"Nom": "Salamat",
		"EMAIL": "z.salamat@cartesia-education.fr",
		"phone": "(+33) 64678-4929",
		"LinkedIn": "https://www.linkedin.com/in/zineb-salamat-11ba7955/",
		"Photos": "ZINEBSALAMAT_0150.jpg (https://dl.airtable.com/.attachments/5f2bfbc37ee199ad16c763b433ea294e/debe69e7/ZINEBSALAMAT_0150.jpg)",
		"@slack": "zinebs"
	}
];

function choice(id){
	if (id == toFind + 1){
		score++;
		document.getElementById('score').innerHTML = 'Score: '+score;
	} else {
		score = 0;
		document.getElementById('score').innerHTML = 'Score: '+score;
		document.getElementById('btn'+id).style = 'background: grey;border-color: grey';
	}
	document.getElementById('btn'+(toFind+1)).style = 'background: green;border-color: green';
	document.getElementById('infos').innerHTML = '<br>Mail: ' + data[toFind].EMAIL + '</br>LinkedIn: ' + data[toFind].LinkedIn + '<br>Telephone: ' + data[toFind].phone;

	var button = document.createElement('input');
	button.type = 'button';
	button.value = 'Suivant';
	button.id = 'btnNext';
	button.onclick = launchSuivant;
	button.classList.add('btn');
	document.getElementById('buttons').appendChild(button);
}

function launchSuivant(){
	document.getElementById('btn1').style = '';
	document.getElementById('btn2').style = '';
	document.getElementById('btn3').style = '';
	document.getElementById('btn4').style = '';
	let btn = document.getElementById('btnNext');
	btn.parentNode.removeChild(btn);
	launch();
}

function launch() {
	toFind = doShuffle();
	var regExp = /\(([^()]*)\)/g;
	var urlPhoto = regExp.exec(data[toFind].Photos).slice(1);
	document.getElementById("imgGuess").src = urlPhoto;
}

var toFind = 0;
var score = 0;
document.getElementById('score').innerHTML = 'Score: '+score;
launch();
