import {
  registerForEvent
} from "./chunk-7JCJ26UM.mjs";
import {
  errorHandler
} from "./chunk-GOABR4RY.mjs";
import {
  checkIn
} from "./chunk-B4WDQ52F.mjs";
import {
  createEvent
} from "./chunk-5PFIMGK7.mjs";
import "./chunk-4U7UAGWA.mjs";
import {
  getAttendeeBadge
} from "./chunk-V6T5UPQA.mjs";
import {
  getEvent
} from "./chunk-ACGOE6V5.mjs";
import "./chunk-JRO4E4TH.mjs";
import {
  getEventAttendees
} from "./chunk-GT5MHZ7V.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o backend",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running");
});
export {
  app
};
