#!/usr/bin/env node
import { rules, gameEngine } from '../src/games/gcd.js';
import game from '../src/index.js';

game(rules, gameEngine);
