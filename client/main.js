/*** main.js ***/

// Rig some famo.us deps
  famousPolyfills;
  famous.core.famous;

  var mainContext = famous.core.Engine.createContext();
  var appView = new AppView();

  mainContext.add(appView);
