import chalk from 'chalk';
import generateTemplate from './generateTemplate.js';
import fs from 'fs';

export default function generateLetter(position, company) {
	try {
		const template = generateTemplate(position, company);
		const pathName = process.env.OUT_DIR;
		console.log(chalk.green.bold(template));
		fs.writeFileSync(`${pathName}/${company}_${position}.txt`, template);
	} catch (error) {
		console.log(chalk.red.bold(error.message));
	}
}
