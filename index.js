#! /usr/bin/env node

import './env.js';
import { program } from 'commander';
import generateLetter from './lib/generateLetter.js';

program
	.command('gen <position> <company>')
	.description('Generate cover letter. Pass position and company name as args.')
	.action(generateLetter);

program.parse();
