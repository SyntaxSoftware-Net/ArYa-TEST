import { Client,Collection } from 'discord.js'
import { connect } from 'mongoose';
import pati from 'path';
import { ReaddirSync } from 'fs'
import { Command, Event, Config } from '../InterFace';
import ConfigJson from '../Config.json';

class ExtendedClient extends Client {

}