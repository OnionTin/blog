import {
  flowRendererV2,
  flowStyles
} from "./chunk-7V22CIB7.js";
import "./chunk-XR5JD3DZ.js";
import {
  flowDb,
  parser$1
} from "./chunk-TOYSO4JP.js";
import "./chunk-PUE2EEME.js";
import "./chunk-TZQ55WLX.js";
import "./chunk-B3DZURT6.js";
import "./chunk-S66N3NZC.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-JJ6QXC5Q.js";
import {
  __toESM
} from "./chunk-3EJPJMEH.js";

// node_modules/.pnpm/mermaid@10.9.0/node_modules/mermaid/dist/flowDiagram-v2-3b53844e.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-3b53844e-6U775YBE.js.map
