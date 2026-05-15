const parseEnv = () => {
    // Write your code here
    const result = Object.keys(process.env)
    .filter((key) => key.startsWith("MITSO_"))
    .map((key) => `${key}=${process.env[key]}`)
    .join("; ");
  console.log(result);

  const all = Object.keys(process.env);
  console.log(all); 
};

parseEnv();