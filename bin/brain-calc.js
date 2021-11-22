#!/usr/bin/env node
import { rules, gameEngine } from '../src/games/calc.js';
import game from '../src/index.js';

game(rules, gameEngine);
