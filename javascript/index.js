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

const mapa_andalucia = new M.layer.WMTS({
    url: "https://ws205.juntadeandalucia.es/tileserver/styles/mapa_andalucia/wmts.xml",
    name: "mapa_andalucia",
    matrixSet: "EPSG:3857",
    legend: "mapa_andalucia",
    transparent: false
}, {
    format: "image/jpeg"
});

mapa_andalucia.setLegendURL("https://ws205.juntadeandalucia.es/tileserver/styles/mapa_andalucia/8/124/99.png");

const mapa_andalucia_gray_scale = new M.layer.WMTS({
    url: "https://ws205.juntadeandalucia.es/tileserver/styles/mapa_andalucia_gray_scale/wmts.xml",
    name: "mapa_andalucia_gray_scale",
    matrixSet: "EPSG:3857",
    legend: "mapa_andalucia_gray_scale",
    transparent: false
}, {
    format: "image/jpeg"
});

mapa_andalucia_gray_scale.setLegendURL("https://ws205.juntadeandalucia.es/tileserver/styles/mapa_andalucia_gray_scale/8/124/99.png");

const mapa_andalucia_gray_scale_fondo_negro = new M.layer.WMTS({
    url: "https://ws205.juntadeandalucia.es/tileserver/styles/mapa_andalucia_gray_scale_fondo_negro/wmts.xml",
    name: "mapa_andalucia_gray_scale_fondo_negro",
    matrixSet: "EPSG:3857",
    legend: "mapa_andalucia_gray_scale_fondo_negro",
    transparent: false
}, {
    format: "image/jpeg"
});

mapa_andalucia_gray_scale_fondo_negro.setLegendURL("https://ws205.juntadeandalucia.es/tileserver/styles/mapa_andalucia_gray_scale_fondo_negro/8/124/99.png");

const mapa_andalucia_sepia_scale = new M.layer.WMTS({
    url: "https://ws205.juntadeandalucia.es/tileserver/styles/mapa_andalucia_sepia_scale/wmts.xml",
    name: "mapa_andalucia_sepia_scale",
    matrixSet: "EPSG:3857",
    legend: "mapa_andalucia_sepia_scale",
    transparent: false
}, {
    format: "image/jpeg"
});

mapa_andalucia_sepia_scale.setLegendURL("https://ws205.juntadeandalucia.es/tileserver/styles/mapa_andalucia_sepia_scale/8/124/99.png");

const style_basic_3d = new M.layer.WMTS({
    url: "https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-basic-3d/wmts.xml",
    name: "style-osm-basic-3d",
    matrixSet: "EPSG:3857",
    legend: "style-osm-basic-3d",
    transparent: false
}, {
    format: "image/jpeg"
});

style_basic_3d.setLegendURL("https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-basic-3d/8/124/99.png");

const osm_liberty = new M.layer.WMTS({
    url: "https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-liberty/wmts.xml",
    name: "style-osm-liberty",
    matrixSet: "EPSG:3857",
    legend: "style-osm-liberty",
    transparent: false
}, {
    format: "image/jpeg"
});

osm_liberty.setLegendURL("https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-liberty/8/124/99.png");

const style_toner = new M.layer.WMTS({
    url: "https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-toner/wmts.xml",
    name: "style-osm-toner",
    matrixSet: "EPSG:3857",
    legend: "style-osm-toner",
    transparent: false
}, {
    format: "image/jpeg"
});

style_toner.setLegendURL("https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-toner/8/124/99.png");

const style_fiord = new M.layer.WMTS({
    url: "https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-fiord/wmts.xml",
    name: "style-osm-fiord",
    matrixSet: "EPSG:3857",
    legend: "style-osm-fiord",
    transparent: false
}, {
    format: "image/jpeg"
});

style_fiord.setLegendURL("https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-fiord/8/124/99.png");

const style_osm_bright = new M.layer.WMTS({
    url: "https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-bright/wmts.xml",
    name: "style-osm-bright",
    matrixSet: "EPSG:3857",
    legend: "style-osm-bright",
    transparent: false
}, {
    format: "image/jpeg"
});

style_osm_bright.setLegendURL("https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-bright/8/124/99.png");

const style_basic = new M.layer.WMTS({
    url: "https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-basic/wmts.xml",
    name: "style-osm-basic",
    matrixSet: "EPSG:3857",
    legend: "style-osm-basic",
    transparent: false
}, {
    format: "image/jpeg"
});

style_basic.setLegendURL("https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-basic/8/124/99.png");

const style_positron = new M.layer.WMTS({
    url: "https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-positron/wmts.xml",
    name: "style-osm-positron",
    matrixSet: "EPSG:3857",
    legend: "style-osm-positron",
    transparent: false
}, {
    format: "image/jpeg"
});

style_positron.setLegendURL("https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-positron/8/124/99.png");

const style_dark_matter = new M.layer.WMTS({
    url: "https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-dark-matter/wmts.xml",
    name: "style-osm-dark-matter",
    matrixSet: "EPSG:3857",
    legend: "style-osm-dark-matter",
    transparent: false
}, {
    format: "image/jpeg"
});

style_dark_matter.setLegendURL("https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-dark-matter/8/124/99.png");

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
    layers: [callejero, ortofoto, mapa_andalucia, mapa_andalucia_gray_scale, mapa_andalucia_gray_scale_fondo_negro, mapa_andalucia_sepia_scale, style_dark_matter, style_positron, style_basic, style_osm_bright, style_fiord, style_toner, osm_liberty, style_basic_3d]
});

mapajs.setBGColorContainer("white");

const configSimplebaselayerselector = { displayBaseLayersInLayerSwitcher: false }
const configFullViewMap = { position: "TL" }
const pluginSimplebaselayerselector = new M.plugin.Simplebaselayerselector(configSimplebaselayerselector);
const pluginFullViewMap = new M.plugin.FullViewMap(configFullViewMap);

mapajs.addPlugin(pluginSimplebaselayerselector);
mapajs.addPlugin(pluginFullViewMap);

mapajs.addLayers(salud);
salud.on(M.evt.LOAD, () => {
    mapajs.setBbox(salud.getMaxExtent());
});