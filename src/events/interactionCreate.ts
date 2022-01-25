import { CommandInteractionOptionResolver } from "discord.js";
import { client } from "..";
import { Event } from "../structures/Events";
import { ExtendedInteraction } from "../typings/Command";

export default new Event("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    await interaction.deferReply();
    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.followUp("you have used a non exitent command ");

    command.run({
      args: interaction.options as CommandInteractionOptionResolver,
      Client: client,
      interaction: interaction as ExtendedInteraction,
    });
  }
});
