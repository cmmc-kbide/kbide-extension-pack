module.exports = {
  name: "kbide-extension-pack",
  title: "KBIDE Extensions Pack",
  description: "KBIDE Tools (Packed) Ex. Serial Monitor, Developer code preview, C/C++ Code auto format",
  keywords : "extension,pack,KBIDE,serial monitor",
  author: "Maker Asia Co.,Ltd.",
  website: "https://kbide.org",
  git: "https://github.com/cmmc-kbide/kbide-extension-pack/",
  image: "/static/extension.jpg",
  version: "1.0.1",
  menu : [
    {
      main : "Tools",
      label : "Compile Log",
      accelerator : "CmdOrCtrl+Shift+C",
      event_emit : "menu-compile-logs"
    },{
      main : "Tools",
      label: "Serial Monitor",
      accelerator: "CmdOrCtrl+Shift+M",
      event_emit: "menu-serial-monitor"
    }
  ],
  components: [
    "serial-monitor",
    "actionbar-serial",
    "compile-logs"
  ],
  dependencies : [],
  data: {
    loaded: false, //this will automatic set to 'true' if this pacakage loaded to IDE
  },
  persistence: {
  },
};
