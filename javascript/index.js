const clusterOptions = {
    ranges: [

        {
            min: 1,
            max: 200,
            style: new M.style.Point({
                fill: {
                    color: "#087021",
                    opacity: 0.8
                },
                stroke: {
                    color: "#FFFFFF",
                    width: 3,
                },
                radius: 15,
            })
        }
    ],
    animated: true,
    maxFeaturesToSelect: 1,
    hoverInteraction: false,
    displayAmount: true,
    selectInteraction: true,
    distance: 80,
};

const vendorParameters = {
    distanceSelectFeatures: 10,
    convexHullStyle: {
        fill: {
            color: "#000000",
            opacity: 0.5
        },
        stroke: {
            color: "#000000",
            width: 1
        }
    }
};

const clusterStyle = new M.style.Cluster(clusterOptions, vendorParameters);

// const compositeStyle = clusterStyle.add(pointStyle);

const salud = new M.layer.WFS({
    name: "salud",
    url: "http://www.ideandalucia.es/services/ise/wfs?",
    namespace: "ise",
    legend: "Centros y equipamientos: Salud",
    geometry: "POINT",
    cql: "idN2=12 or idN2=14",
    extract: true
}, {
    vendor: {
        getFeature: {
            "propertyName": "Nombre,Tipo,Titularidad,Direccion,Localidad,Municipio,Provincia,geom"
        }
    }
});

salud.setStyle(clusterStyle);

const callejero = new M.layer.WMTS({
    url: "https://www.ign.es/wmts/ign-base",
    name: "IGNBaseTodo",
    matrixSet: "EPSG:3857",
    legend: "Callejero",
    transparent: false
}, {
    format: "image/jpeg"
});

callejero.setLegendURL("./legends/callejero.png")
const ortofoto = new M.layer.WMTS({
    url: "https://www.ign.es/wmts/pnoa-ma?",
    name: "OI.OrthoimageCoverage",
    matrixSet: "EPSG:3857",
    legend: "Ortofoto",
    transparent: false
}, {
    format: "image/jpeg"
});

ortofoto.setLegendURL("./legends/ortofoto.png")


const mapajs = M.map({
    container: "map",
    controls: ["scale", "scaleline", "panzoombar", "mouse"],
    projection: "EPSG:3857*m",
    zoom: 6,
    layers: [callejero, ortofoto]
});

mapajs.setBGColorContainer("white");

const configSimplebaselayerselector = { displayBaseLayersInLayerSwitcher: false }
const configFullViewMap = {position: 'TL'}
const pluginSimplebaselayerselector = new M.plugin.Simplebaselayerselector(configSimplebaselayerselector);
const pluginFullViewMap = new M.plugin.FullViewMap(configFullViewMap);

mapajs.addPlugin(pluginSimplebaselayerselector);
mapajs.addPlugin(pluginFullViewMap);

mapajs.addLayers(salud);
salud.on(M.evt.LOAD, () => {
    mapajs.setBbox(salud.getMaxExtent());
});