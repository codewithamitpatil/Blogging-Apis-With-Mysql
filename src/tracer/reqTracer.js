// intialize jaeger client 

const initJaegerTracer = require('jaeger-client').initTracer

// importing config
const { serviceName,jaegerHost,jaegerPort } = require('./../config/index');

// jaeger connection
function initTracer () {
 
const config = {
    serviceName:  serviceName,
    reporter: {
        agentHost: jaegerHost,
        agentPort: jaegerPort,
        logSpan: true,
    },
    sampler: {
        type: "const",
        param: 1,
    },
};
const options = {
    tags: {
       serviceName: "v.0.1",
    }

};

  return initJaegerTracer(config,options);

}


module.exports ={ initTracer } ;
