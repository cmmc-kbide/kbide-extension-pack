import * as ComponentMap from './components'

export default {
  install(Vue, options)
  {
    for (var componentName in ComponentMap)
    {
      Vue.component( componentName, ComponentMap[ componentName ] );
    }
    Vue.prototype.$global.$on("menu-serial-monitor",()=>{
      console.log("open-serial-monitor");
      Vue.prototype.$global.ui.addBottomTab('serial-monitor','Serial Monitor','SerialMonitor');
    });
    Vue.prototype.$global.$on("menu-compile-logs",()=>{
      console.log("open-compile-logs");
      Vue.prototype.$global.ui.addBottomTab('compile-logs','Compile Logs','CompileLogs');
    });
  }
};
