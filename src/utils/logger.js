export function log(message) {

  const time = new Date().toISOString();

  console.log(`[BladeEngine] ${time} - ${message}`);

}
