let express = require("express");
let app = express();
let categories = [
    {
        "name": "Autos",
        "description": "Los mejores precios en autos 0 kilómetro, de alta y media gama.",
        "productCount": "122",
        "imgSrc": "img/cat1.jpg"
    },
    {
        "name": "Juguetes",
        "description": "Encuentra aquí los mejores precios para niños/as de cualquier edad.",
        "productCount": "354",
        "imgSrc": "img/cat2.jpg"
    },
    {
        "name": "Muebles",
        "description": "Muebles antiguos, nuevos y para ser armados por uno mismo.",
        "productCount": "157",
        "imgSrc": "img/cat3.jpg"
    },
    {
        "name": "Herramientas",
        "description": "Herramientas para cualquier tipo de trabajo.",
        "productCount": "452",
        "imgSrc": "img/cat4.jpg"
    },
    {
        "name": "Computadoras",
        "description": "Todo en cuanto a computadoras, para uso de oficina y/o juegos.",
        "productCount": "724",
        "imgSrc": "img/cat5.jpg"
    },
    {
        "name": "Vestimenta",
        "description": "Gran variedad de ropa, nueva y de segunda mano.",
        "productCount": "841",
        "imgSrc": "img/cat6.jpg"
    },
    {
        "name": "Electrodomésticos",
        "description": "Todos los electrodomésticos modernos y de bajo consumo.",
        "productCount": "84",
        "imgSrc": "img/cat7.jpg"
    },
    {
        "name": "Deporte",
        "description": "Toda la variedad de indumentaria para todo tipo de deporte.",
        "productCount": "574",
        "imgSrc": "img/cat8.jpg"
    },
    {
        "name": "Celulares",
        "description": "Celulares de todo tipo para cubrir todas las necesidades.",
        "productCount": "124",
        "imgSrc": "img/cat9.jpg"
    }
];
let publishProducts = {"msg":"¡Has publicado con éxito!"};
let categoriesInfo = {
    "name": "Autos",
    "description": "Los mejores precios en autos 0 kilómetro, de alta y media gama.",
    "productCriteria": "Incluya aquí los productos que sean autos o relacionados: repuestos, accesorios, etc.",
    "productCount": "122",
    "images": [
        "img/cat1.jpg",
        "img/car1.jpg",
        "img/car2.jpg",
        "img/car3.jpg"
    ]
}
let products = [
    {
        "name": "Chevrolet Onix Joy",
        "description": "Generación 2019, variedad de colores. Motor 1.0, ideal para ciudad.",
        "cost": 13500,
        "currency": "USD",
        "imgSrc": "img/prod1.jpg",
        "soldCount": 14
    },
    {
        "name": "Fiat Way",
        "description": "La versión de Fiat que brinda confort y a un precio accesible.",
        "cost": 14500,
        "currency": "USD",
        "imgSrc": "img/prod2.jpg",
        "soldCount": 52
    },
    {
        "name": "Suzuki Celerio",
        "description": "Un auto que se ha ganado la buena fama por su economía con el combustible.",
        "cost": 12500,
        "currency": "USD",
        "imgSrc": "img/prod3.jpg",
        "soldCount": 25
    },
    {
        "name": "Peugeot 208",
        "description": "El modelo de auto que se sigue renovando y manteniendo su prestigio en comodidad.",
        "cost": 15200,
        "currency": "USD",
        "imgSrc": "img/prod4.jpg",
        "soldCount": 17
    }
]
let productInfo = {
    "name": "Chevrolet Onix Joy",
    "description": "Potenciá tu actitud con Onix Joy que, además de destacarse por su diseño juvenil y moderno, te ofrecé una óptima autonomía, un desempeño equilibrado y el máximo confort interior. \u003cbr\u003eYa sea un viaje largo o un simple paseo por la ciudad, el confort es uno de los puntos fuertes del Onix. Esta versión incluye aire acondicionado, asientos tapizados en tela y gran espacio interior que te garantiza el máximo confort.",
    "cost": 13500,
    "currency": "USD",
    "soldCount": 14,
    "category": "Autos",
    "images": [
        "img/prod1.jpg",
        "img/prod1_1.jpg",
        "img/prod1_2.jpg",
        "img/prod1_3.jpg",
        "img/prod1_4.jpg"
    ],
    "relatedProducts": [1, 3]
};
let producInfoComments = [{
    "score": 3,
    "description": "Ya llevo un año con este auto y la verdad que tiene sus ventajas y desventajas",
    "user": "juan_pedro",
    "dateTime": "2020-02-25 18:03:52"
},
{
    "score": 5,
    "description": "Es un auto muy cómodo y en relación precio/calidad vale la pena!",
    "user": "maria_sanchez",
    "dateTime": "2020-01-17 13:42:18"
},
{
    "score": 4,
    "description": "Casi todo bien!, excepto por algún detalle de gusto personal",
    "user": "paola_perez",
    "dateTime": "2020-03-14 09:05:13"
},
{
    "score": 5,
    "description": "Un espectáculo el auto!",
    "user": "pablo_gomez",
    "dateTime": "2020-02-21 15:05:22"
}];
let cartInfo = {
    "articles": [
        {
            "name": "Pino de olor para el auto",
            "count": 2,
            "unitCost": 100,
            "currency": "UYU",
            "src": "img/tree1.jpg"
        }
    ]
}
let cartBuy = {"msg":"¡Has comprado con éxito!"};

app.get("/categories", (req, res)=> res.json(categories));
app.get("/publishProducts", (req, res)=> res.json(publishProducts));
app.get("/categoriesInfo", (req, res)=> res.json(categoriesInfo));
app.get("/products", (req, res)=> res.json(products));
app.get("/productInfo", (req, res)=> res.json(productInfo));
app.get("/producInfoComments", (req, res)=> res.json(producInfoComments));
app.get("/cartInfo", (req, res)=> res.json(cartInfo));
app.get("/cartBuy", (req, res)=> res.json(cartBuy));

app.listen(3000, ()=> console.log("Server loaded on port 3000"));