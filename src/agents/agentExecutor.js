export async function executeAgent(agentName) {

  return {
    name: agentName,
    run: async (task, input) => {

      return {
        task,
        input,
        result: `Agent ${agentName} executed ${task}`
      };

    }
  };

}
