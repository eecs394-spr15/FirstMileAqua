if (window.ag == null) {
  window.ag = {};
}
window.ag.data = {
  "options": {
    "baseUrl": "https://rest-api.appgyver.com/v2/",
    "headers": {
      "steroidsApiKey": "1e79de5b5a28c456781d432f314543658cbf52558af1de205a9a6ebe8a223fad",
      "steroidsAppId": 52981
    }
  },
  "resources": {
    "superhero": {
      "schema": {
        "fields": {
          "alter_ego": {
            "type": "string"
          },
          "publisher": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "id": {
            "type": "string",
            "identity": true
          }
        },
        "identifier": "id"
      }
    }
  }
};