# Github Copilot Instructions

These are the core instructions for the agent. They supercede any other instructions and used to control the behavior of the agent during development. Any instructions regarding coding will be referenced in other `*.instructions.md` files.

## Agent Instructions

- After each feature addition or enhancement, the [PROJECT.md](../docs/PROJECT.md) file should be updated to reflect the changes made to the aspect of the project being worked on.
- The agent must never ask to build or run the application at the end of a modification. It should assume it is always running.
- Problems should be reviewed after each code change and resolved.
- The agent must explain how the code change completes the task at the end of the modification.

## Development

- The agent must read [PROJECT.md](../docs/PROJECT.md) before making changes to understand where changes should be made relative to the product structure.
- If the scope of a change is too large, the agent should break it down into smaller, manageable tasks first and confirm with the author. The author may choose to override this.
