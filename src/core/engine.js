import { runTask } from "../tasks/taskRunner.js";
import { executeAgent } from "../agents/agentExecutor.js";
import { log } from "../utils/logger.js";

export class BladeEngine {

  async execute({ agent, task, input }) {
    log(`Starting execution for agent: ${agent}`);

    try {

      const agentInstance = await executeAgent(agent);

      const result = await runTask(agentInstance, task, input);

      log(`Execution complete`);

      return result;

    } catch (error) {

      log(`Execution failed: ${error.message}`);

    }

  }

}
