import { BladeEngine } from "./core/engine.js";

const engine = new BladeEngine();

engine.execute({
  agent: "market-agent",
  task: "analyze-market",
  input: {
    token: "SOL"
  }
});
