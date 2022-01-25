import { ExtendedClient } from "../structures/Client";
import {
  CommandInteraction,
  CommandInteractionOptionResolver,
  ChatInputApplicationCommandData,
  PermissionResolvable,
  GuildMember,
} from "discord.js";

export interface ExtendedInteraction extends CommandInteraction {
  member: GuildMember;
}

interface RunOptions {
  Client: ExtendedClient;
  interaction: ExtendedInteraction;
  args: CommandInteractionOptionResolver;
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {
  name: string;
  description?: string;
  userPermission?: PermissionResolvable[];
  run: RunFunction;
} & ChatInputApplicationCommandData;
