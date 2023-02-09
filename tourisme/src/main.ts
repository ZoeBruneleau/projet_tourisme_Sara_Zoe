import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Server } from 'miragejs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
import { createServer, Model, Response } from "miragejs"


createServer({
  models: {
    lieu: Model,
    comment:Model
  },
  routes() {
    this.passthrough('http://localhost:57639/**');

    this.post("/comment",  function(schema, request) {
      console.log("post data")

      let attrs = JSON.parse(request.requestBody)
      return schema.db['comments'].insert(attrs)
    });

    this.get("/lieu", function (schema, request) {
      return schema.db['lieus']

    });

    this.get("/comment", function (schema, request) {
      return schema.db['comments']

    });



  },
  seeds(server) {
    server.db.loadData({
      comments:[],
      lieus: [
        {
          "id": 58,
          "name": "Abbaye de Beaulieu-en-Rouergue",
          "latitude": 44.2012986,
          "longitude": 1.8576953,
          "comment": "commentaire"
        },
        {
          "id": 85,
          "name": "Abbaye de Charroux",
          "latitude": 46.141736,
          "longitude": 0.404965,
          "comment": "commentaire"
        },
        {
          "id": 18,
          "name": "Abbaye de Cluny",
          "latitude": 46.4351729231305,
          "longitude": 4.65821921825409,
          "comment": "commentaire"
        },
        {
          "id": 5,
          "name": "Abbaye de La Sauve-Majeure",
          "latitude": 44.7679,
          "longitude": -0.3125,
          "comment": "commentaire"
        },
        {
          "id": 88,
          "name": "Abbaye de Montmajour",
          "latitude": 43.7056788063795,
          "longitude": 4.66414824128151,
          "comment": "commentaire"
        },
        {
          "id": 68,
          "name": "Abbaye du Bec-Hellouin",
          "latitude": 49.228611,
          "longitude": 0.721667,
          "comment": "commentaire"
        },
        {
          "id": 66,
          "name": "Abbaye du Mont-Saint-Michel",
          "latitude": 48.6359715815921,
          "longitude": -1.51141405105591,
          "comment": "commentaire"
        },
        {
          "id": 94,
          "name": "Abbaye du Thoronet",
          "latitude": 43.4501102,
          "longitude": 6.3080895,
          "comment": "commentaire"
        },
        {
          "id": 20,
          "name": "Alignements de Carnac",
          "latitude": 47.597702,
          "longitude": -3.0633934,
          "comment": "commentaire"
        },
        {
          "id": 74,
          "name": "Arc de triomphe",
          "latitude": 48.873818,
          "longitude": 2.295023,
          "comment": "commentaire"
        },
        {
          "id": 145,
          "name": "Basilique cathédrale de Saint-Denis",
          "latitude": 48.9354196846302,
          "longitude": 2.35991477966309,
          "comment": "commentaire"
        },
        {
          "id": 19,
          "name": "Cairn de Barnenez",
          "latitude": 48.6675691351204,
          "longitude": -3.85842740535736,
          "comment": "commentaire"
        },
        {
          "id": 99,
          "name": "Cathédrale de Besançon et son horloge astronomique",
          "latitude": 47.2336343,
          "longitude": 6.0303255,
          "comment": "commentaire"
        },
        {
          "id": "",
          "name": "Chapelle des Moines à Berzé",
          "latitude": 46.36354,
          "longitude": 4.700442,
          "comment": "commentaire"
        },
        {
          "id": 72,
          "name": "Chapelle expiatoire",
          "latitude": 48.8736985969585,
          "longitude": 2.32269108295441,
          "comment": "commentaire"
        },
        {
          "id": 79,
          "name": "Château d'Angers",
          "latitude": 47.4698136,
          "longitude": -0.5593384,
          "comment": "commentaire"
        },
        {
          "id": 60,
          "name": "Château d'Assier",
          "latitude": 44.6752839,
          "longitude": 1.8792255,
          "comment": "commentaire"
        },
        {
          "id": 15,
          "name": "Château d'Aulteribe",
          "latitude": 45.775,
          "longitude": 3.498889,
          "comment": "commentaire"
        },
        {
          "id": 23,
          "name": "Château d'Azay-le-Rideau",
          "latitude": 47.2595533,
          "longitude": 0.4666037,
          "comment": "commentaire"
        },
        {
          "id": 89,
          "name": "Château d'If",
          "latitude": 43.2798571264442,
          "longitude": 5.32513439655304,
          "comment": "commentaire"
        },
        {
          "id": 84,
          "name": "Château d'Oiron",
          "latitude": 46.9518734665508,
          "longitude": -0.0773334503173828,
          "comment": "commentaire"
        },
        {
          "id": 24,
          "name": "Château de Bouges",
          "latitude": 47.0424048078576,
          "longitude": 1.67296886444092,
          "comment": "commentaire"
        },
        {
          "id": 16,
          "name": "Château de Bussy-Rabutin",
          "latitude": 47.5615776782153,
          "longitude": 4.52347576618195,
          "comment": "commentaire"
        },
        {
          "id": 9,
          "name": "Château de Cadillac",
          "latitude": 44.638101219349,
          "longitude": -0.320652723312378,
          "comment": "commentaire"
        },
        {
          "id": 67,
          "name": "Château de Carrouges",
          "latitude": 48.5601290798993,
          "longitude": -0.154345035552979,
          "comment": "commentaire"
        },
        {
          "id": 59,
          "name": "Château de Castelnau-Bretenoux",
          "latitude": 44.8992,
          "longitude": 1.8256,
          "comment": "commentaire"
        },
        {
          "id": 13,
          "name": "Château de Chareil-Cintrat",
          "latitude": 46.2394201556751,
          "longitude": 3.22972297668457,
          "comment": "commentaire"
        },
        {
          "id": 33,
          "name": "Château de Châteaudun",
          "latitude": 48.0707956173737,
          "longitude": 1.32372379302979,
          "comment": "commentaire"
        },
        {
          "id": 82,
          "name": "Château de Coucy",
          "latitude": 49.521774855251,
          "longitude": 3.31861138343811,
          "comment": "commentaire"
        },
        {
          "id": 31,
          "name": "Château de Fougéres-sur-Biévre",
          "latitude": 47.4477388488549,
          "longitude": 1.3438081741333,
          "comment": "commentaire"
        },
        {
          "id": 62,
          "name": "Château de Gramont",
          "latitude": 43.9580329,
          "longitude": 0.9211763,
          "comment": "commentaire"
        },
        {
          "id": 37,
          "name": "Château de La Motte-Tilly",
          "latitude": 48.4671345668952,
          "longitude": 3.43147337436676,
          "comment": "commentaire"
        },
        {
          "id": 2,
          "name": "Château de Maisons",
          "latitude": 48.9471671045817,
          "longitude": 2.15389966964722,
          "comment": "commentaire"
        },
        {
          "id": 382,
          "name": "Château de Montal",
          "latitude": 44.8624197,
          "longitude": 1.8599192,
          "comment": "commentaire"
        },
        {
          "id": 81,
          "name": "Château de Pierrefonds",
          "latitude": 49.3469937613645,
          "longitude": 2.98019707202911,
          "comment": "commentaire"
        },
        {
          "id": 383,
          "name": "Château de Puyguilhem",
          "latitude": 45.425833,
          "longitude": 0.744444,
          "comment": "commentaire"
        },
        {
          "id": 46,
          "name": "Château de Rambouillet, Laiterie de la Reine et Chaumiére aux Coquillages",
          "latitude": 48.6454040146198,
          "longitude": 1.81732803583145,
          "comment": "commentaire"
        },
        {
          "id": 32,
          "name": "Château de Talcy",
          "latitude": 47.7697553616761,
          "longitude": 1.44447684288025,
          "comment": "commentaire"
        },
        {
          "id": 12,
          "name": "Château de Villeneuve-Lembron",
          "latitude": 45.4779965450436,
          "longitude": 3.18597078323364,
          "comment": "commentaire"
        },
        {
          "id": 44,
          "name": "Château de Vincennes",
          "latitude": 48.84266824545,
          "longitude": 2.43570327758789,
          "comment": "commentaire"
        },
        {
          "id": "406",
          "name": "Château de Villers-Cotteréts",
          "latitude": 49.2559,
          "longitude": 3.092076,
          "comment": "commentaire"
        },
        {
          "id": 377,
          "name": "Château de Voltaire é Ferney",
          "latitude": 46.2581309,
          "longitude": 6.1043544,
          "comment": "commentaire"
        },
        {
          "id": 42,
          "name": "Château et Parc de Champs-sur-Marne",
          "latitude": 48.8536468310556,
          "longitude": 2.60403871536255,
          "comment": "commentaire"
        },
        {
          "id": 55,
          "name": "Château et remparts de la cité de Carcassonne",
          "latitude": 43.2072833574495,
          "longitude": 2.36326217651367,
          "comment": "commentaire"
        },
        {
          "id": 87,
          "name": "Cloître de la cathédrale de Fréjus",
          "latitude": 43.4330627773556,
          "longitude": 6.73715114593506,
          "comment": "commentaire"
        },
        {
          "id": 14,
          "name": "Ensemble cathédrale du Puy-en-Velay",
          "latitude": 45.0461801,
          "longitude": 3.8848592,
          "comment": "commentaire"
        },
        {
          "id": 25,
          "name": "Cloître de la Psalette",
          "latitude": 47.3958291154544,
          "longitude": 0.694069862365723,
          "comment": "commentaire"
        },
        {
          "id": "404",
          "name": "Colonne de Juillet, place de la Bastille",
          "latitude": 48.853207,
          "longitude": 2.369101,
          "comment": "commentaire"
        },
        {
          "id": 103,
          "name": "Colonne de la Grande Armée é Wimille",
          "latitude": 50.7644118,
          "longitude": 1.6310642,
          "comment": "commentaire"
        },
        {
          "id": 70,
          "name": "Conciergerie",
          "latitude": 48.8558175524787,
          "longitude": 2.34595119953156,
          "comment": "commentaire"
        },
        {
          "id": 384,
          "name": "Domaine national de Jossigny",
          "latitude": 48.8374322716853,
          "longitude": 2.75358259677887,
          "comment": "commentaire"
        },
        {
          "id": 40,
          "name": "Domaine national de Saint-Cloud",
          "latitude": 48.836821431274,
          "longitude": 2.21820831298828,
          "comment": "commentaire"
        },
        {
          "id": 107,
          "name": "Domaine national du Palais-Royal",
          "latitude": 48.864972372625,
          "longitude": 2.33773827552795,
          "comment": "commentaire"
        },
        {
          "id": 53,
          "name": "Fort Saint-André é Villeneuve-lez-Avignon",
          "latitude": 43.9662,
          "longitude": 4.8001,
          "comment": "commentaire"
        },
        {
          "id": 56,
          "name": "Forteresse de Salses",
          "latitude": 42.8396802790619,
          "longitude": 2.91830241680145,
          "comment": "commentaire"
        },
        {
          "id": 6,
          "name": "Grotte de Pair-non-Pair",
          "latitude": 45.0396354,
          "longitude": -0.5022214,
          "comment": "commentaire"
        },
        {
          "id": "",
          "name": "Hétel de la Marine",
          "latitude": 48.86661,
          "longitude": 2.322681,
          "comment": "commentaire"
        },
        {
          "id": "410",
          "name": "Hétel de Sade",
          "latitude": 43.789129,
          "longitude": 4.83102,
          "comment": "commentaire"
        },
        {
          "id": 208,
          "name": "Hétel de Sully",
          "latitude": 48.854703,
          "longitude": 2.363875,
          "comment": "commentaire"
        },
        {
          "id": 375,
          "name": "Les Eyzies-de-Tayac",
          "latitude": 44.935997691242,
          "longitude": 1.01565062999725,
          "comment": "commentaire"
        },
        {
          "id": 21,
          "name": "Maison d'Ernest Renan é Tréguier",
          "latitude": 48.788491,
          "longitude": -3.2271867,
          "comment": "commentaire"
        },
        {
          "id": 28,
          "name": "Maison de George Sand é Nohant",
          "latitude": 46.6254445,
          "longitude": 1.9749036,
          "comment": "commentaire"
        },
        {
          "id": 80,
          "name": "Maison de Georges Clemenceau é Saint-Vincent-sur-Jard",
          "latitude": 46.4063,
          "longitude": -1.5474,
          "comment": "commentaire"
        },
        {
          "id": 45,
          "name": "Maison des Jardies é Sévres",
          "latitude": 48.8272072,
          "longitude": 2.1985906,
          "comment": "commentaire"
        },
        {
          "id": 96,
          "name": "Monastére de Saorge",
          "latitude": 43.9878757,
          "longitude": 7.5509564,
          "comment": "commentaire"
        },
        {
          "id": 98,
          "name": "Monastére royal de Brou é Bourg-en-Bresse",
          "latitude": 46.1978767,
          "longitude": 5.2356066,
          "comment": "commentaire"
        },
        {
          "id": 102,
          "name": "Musée des Plans-Reliefs",
          "latitude": 48.8564775743156,
          "longitude": 2.31269717216492,
          "comment": "commentaire"
        },
        {
          "id": 39,
          "name": "Palais du Tau é Reims",
          "latitude": 49.2530901204998,
          "longitude": 4.03418183326721,
          "comment": "commentaire"
        },
        {
          "id": 34,
          "name": "Palais Jacques Céur é Bourges",
          "latitude": 47.085296,
          "longitude": 2.3944818,
          "comment": "commentaire"
        },
        {
          "id": 73,
          "name": "Panthéon",
          "latitude": 48.8462842078404,
          "longitude": 2.34607324004173,
          "comment": "commentaire"
        },
        {
          "id": 95,
          "name": "Place forte de Mont-Dauphin",
          "latitude": 44.6691299,
          "longitude": 6.6252286,
          "comment": "commentaire"
        },
        {
          "id": 71,
          "name": "Sainte-Chapelle",
          "latitude": 48.8553675326006,
          "longitude": 2.3450231552124,
          "comment": "commentaire"
        },
        {
          "id": 91,
          "name": "Site archéologique de Glanum",
          "latitude": 43.7736,
          "longitude": 4.833,
          "comment": "commentaire"
        },
        {
          "id": 8,
          "name": "Site archéologique de Montcaret",
          "latitude": 44.8587327,
          "longitude": 0.0638404,
          "comment": "commentaire"
        },
        {
          "id": 65,
          "name": "Site archéologique de Montmaurin",
          "latitude": 43.2246742,
          "longitude": 0.6370025,
          "comment": "commentaire"
        },
        {
          "id": 52,
          "name": "Site archéologique et musée d'Ensérune",
          "latitude": 43.310556,
          "longitude": 3.115278,
          "comment": "commentaire"
        },
        {
          "id": 381,
          "name": "Site des mégalithes de Locmariaquer",
          "latitude": 47.5732972,
          "longitude": -2.9574633,
          "comment": "commentaire"
        },
        {
          "id": 86,
          "name": "Site gallo-romain de Sanxay",
          "latitude": 46.4941324,
          "longitude": -0.0070385,
          "comment": "commentaire"
        },
        {
          "id": 35,
          "name": "Tour et crypte de la cathédrale de Bourges",
          "latitude": 47.0824115207644,
          "longitude": 2.3984956741333,
          "comment": "commentaire"
        },
        {
          "id": 10,
          "name": "Tour Pey-Berland é Bordeaux",
          "latitude": 44.8379962,
          "longitude": -0.5777064,
          "comment": "commentaire"
        },
        {
          "id": 27,
          "name": "Tours de la cathédrale de Chartres",
          "latitude": 48.4477636872284,
          "longitude": 1.48798227310181,
          "comment": "commentaire"
        },
        {
          "id": 29,
          "name": "Tours de la cathédrale de Reims",
          "latitude": 49.2534,
          "longitude": 4.033,
          "comment": "commentaire"
        },
        {
          "id": 75,
          "name": "Tours de la cathédrale Notre-Dame de Paris",
          "latitude": 48.8529761826414,
          "longitude": 2.34995305538177,
          "comment": "commentaire"
        },
        {
          "id": 51,
          "name": "Tours de La Rochelle",
          "latitude": 46.1558010144313,
          "longitude": -1.15323185920715,
          "comment": "commentaire"
        },
        {
          "id": 54,
          "name": "Tours et remparts d'Aigues-Mortes",
          "latitude": 43.5678143607364,
          "longitude": 4.19086575508118,
          "comment": "commentaire"
        },
        {
          "id": 108,
          "name": "Tours et trésor de la cathédrale d'Amiens",
          "latitude": 49.895,
          "longitude": 2.302222,
          "comment": "commentaire"
        },
        {
          "id": 97,
          "name": "Trophée d'Auguste é La Turbie",
          "latitude": 43.7448050133043,
          "longitude": 7.40184009075165,
          "comment": "commentaire"
        },
        {
          "id": 386,
          "name": "Villa Cavrois",
          "latitude": 50.666709,
          "longitude": 3.162723,
          "comment": "commentaire"
        },
        {
          "id": "",
          "name": "Villa Kérylos",
          "latitude": 43.70316,
          "longitude": 7.333887,
          "comment": "commentaire"
        },
        {
          "id": 48,
          "name": "Monastére royal de Brou é Bourg-en-Bresse",
          "latitude": 48.9244255560091,
          "longitude": 2.02827036380768,
          "comment": "commentaire"
        }
      ]
    })
  },

})
