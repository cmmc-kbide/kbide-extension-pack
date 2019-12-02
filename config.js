module.exports = {
  name: "kbide-extension-pack",
  title: "KBIDE Extensions Pack",
  description: "KBIDE Tools (Packed) Ex. Serial Monitor, Developer code preview, C/C++ Code auto format",
  keywords : "extension,pack,KBIDE,serial monitor",
  author: "Maker Asia Co.,Ltd.",
  website: "https://kbide.org",
  git: "https://github.com/cmmc-kbide/kbide-extension-pack/",
  image: "/static/extension.jpg",
  version: "1.0.0",
  components: [
    "serial-monitor",
    "actionbar-serial"
  ],
  dependencies : [],
  data: {
    loaded: false, //this will automatic set to 'true' if this pacakage loaded to IDE
  },
  persistence: {
  },
};
