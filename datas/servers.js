var servers = [{
    "url": "/hsheilbronn-embeded-raum",
    "apiurl": "http://roomserver-ws2017.pagekite.me",
    "name": "Room Server - Hochschule Heilbronn",
    "modules": [{
        "name": "Licht Steurung",
        "description": "Hier können Sie das Licht ein- und auschalten.",
        "slug": "light-remote-control"
    }, {
        "name": "Heizung Steurung",
        "description": "Hier können Sie die Heizung ein- und aufdrehen.",
        "slug": "temperature-remote-control"
    }]
}, {
    "url": "/zimmer-fofie",
    "apiurl": "http://roomserver-ws2017.pagekite.me",
    "name": "Zimmer Fofie @home",
    "modules": [{
        "name": "Licht remote seteurung",
        "description": "lorem ipsum .......",
        "slug": "light-remote-control"
    }, {
        "name": "Heizugn remote seteurung",
        "description": "lorem ipsum .......",
        "slug": "temperature-remote-control"
    }]
}];

module.exports = servers;
