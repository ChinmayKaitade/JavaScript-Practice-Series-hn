# Save and Work on GitHub for JavaScript 🚀🔥

Step1: Make Simple GitHub Repository.

Step2: Click on Code, Click on `CodeSpaces` and click on `Create CodeSpaces on main`.

Step3: It will initiate as same as VS Code instance.

Step4: Now make NodeJS Environment for JavaScript, Click on `File` --> `View` --> `Command Palate`.

Step5: Now search `Container` on Command Palate.

Step6: Select `CodeSpaces: Add Dev Container Configuration Files...` and Click on it.

Step7: Now search `NodeJS` if it is not available then Click on `Show All Definitions...` and Now Search for NodeJS.

Step8: Now Find `NodeJS & JavaScript` and Click on it and Select your version and Click on `OK`.

Step9: Click on Rebuild now option and your GitHub machine will restart.

## How to Save Your Code from GitHub CodeSpaces ⚒️

Step1: Go to `Source Control` Icon Click on it, Click on `+` icon to add code to GitHub, type your valid message and `Commit` it. finally Click on three dots and `Push` it.

Step2: Don't forget to turnoff your GitHub CodeSpaces machine to save your GitHub CodeSpaces hours. Go to `devcontainer.json` and go on `CodeSpaces`. Your CodeSpaces window will open now click on three dots and click on delete.

**_devcontainer.json_**

```bash
// For format details, see https://aka.ms/devcontainer.json. For config options, see the
// README at: https://github.com/devcontainers/templates/tree/main/src/javascript-node
{
	"name": "Node.js",
	// Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
	"image": "mcr.microsoft.com/devcontainers/javascript-node:0-18",

	// Features to add to the dev container. More info: https://containers.dev/features.
	// "features": {},

	// Use 'forwardPorts' to make a list of ports inside the container available locally.
	// "forwardPorts": [],

	// Use 'postCreateCommand' to run commands after the container is created.
	// "postCreateCommand": "yarn install",

	// Configure tool-specific properties.
	"customizations": {
		"vscode": {
			"extensions": [
				"esbenp.prettier-vscode",
				"vscode-icons-team.vscode-icons",
				"wayou.vscode-todo-highlight"
			],
			"settings": {
				"editor.fontSize": 32,
				"terminal.integrated.fontSize": 24,
				"editor.wordWrap": "on"
			}

		}

	 }

	// Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
	// "remoteUser": "root"
}
```
