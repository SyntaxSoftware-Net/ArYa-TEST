import Client from '../Client';
import { Message } from 'discord.js';

interFace Run {
    (client:Client, message:Message,args:string[]);
}    

export interFace Command {
    name: string;
    description?: string;
    aliases?: string[];
    run: Run;