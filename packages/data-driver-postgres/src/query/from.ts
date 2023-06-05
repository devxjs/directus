import { escapeIdentifier } from '../utils/escape-identifier.js';

/**
 * Generate the `FROM x` part of a SQL statement
 * @param from - The table to select data from
 * @returns The `FROM x` part of a SQL statement
 */
export function from(from: string): string {
	return `FROM ${escapeIdentifier(from)}`;
}