<h1 align="center">Gluo Utilities</h1>

[![Maintainability](https://api.codeclimate.com/v1/badges/063fbb34d165f3be5847/maintainability)](https://codeclimate.com/github/WeForge/Gluo-Utilities/maintainability)
> *A simple discord app built by [WeForge](https://github.com/WeForge) for managing bugs of [Gluo](https://gluo.xyz) using [@tryforge/ForgeScript](https://github.com/tryforge/ForgeScript).*
<br>
<h2 align="center">Features</h2>

Feature|Progress
-|-
Utility|100%
Dev utility|100%
Bug reports|100%
Statistics|33%
<br>
<h2 align="center">Credits</h2>

- Kipteam
  - tips and improvements
- Tryforge
  - for the amazing package
<h2 align="center">Setting up</h2>

1. Install [Node.js](https://nodejs.org/en/download)
2. Install the packages using the following [npm](https://npmjs.com) command:
    ```bash
    npm i
    ```
3. Create a file named `.env` outside the `src` directory and it should look like:
    ```dosini
    your_mom=your discord bot token here
    ```
>[!CAUTION]
> Never share this file to anyone! Keep it in a safe place.
5. Start the bot by running the following command:
    ```bash
    npm start
    ```
6. Now, use the evaluation command: `.e` and run this:
    ```yaml
    the increment id: $setGuildVar[a;0] $getGuildVar[a]
    the category id in which reports will be made: $setGuildVar[categoryID_in_which_reports_will_be_made;enter it here] $getGuildVar[categoryID_in_which_reports_will_be_made]
    the channel id of logs: $setGuildVar[channelID_of_logs;] $getGuildVar[channelID_of_logs]
    ```
>[!IMPORTANT]
> The evaluation part needs to be repeated everytime you want to use it in another guild!
<h2 align="center">Star history</h2>
<a href="https://star-history.com/#WeForge/GluoManagementBot&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=WeForge/GluoManagementBot&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=WeForge/GluoManagementBot&type=Timeline" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=WeForge/GluoManagementBot&type=Timeline" />
  </picture>
</a>
