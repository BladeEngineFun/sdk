export async function runTask(agent, task, input) {

  const result = await agent.run(task, input);

  return {
    status: "success",
    data: result
  };

}
