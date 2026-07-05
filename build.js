const fs = require("fs");

if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
}

const content = `
<!DOCTYPE html>
<html>
<head>
    <title>GitHub Actions Build</title>
</head>
<body>
    <h1>🚀 Build Successful</h1>
    <h2>Built by GitHub Actions</h2>
    <p>This file was generated during the build stage.</p>
</body>
</html>
`;

fs.writeFileSync("dist/index.html", content);

console.log("Build completed successfully.");