// Console APIs are using process.STDIN, process.STDOUT or process.STDERR under the hood
// Listen for user input via STDIN
process.stdin.on("data", (data) => {
  const name = data.toString().trim().toUpperCase();

  if (name !== "") {
    // Use STDOUT
    process.stdout.write(`Hello ${name}`);
  } else {
    // Use STDERR
    process.stderr.write("Input was empty");
  }
});
