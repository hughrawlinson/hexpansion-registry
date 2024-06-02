import hexpansions_contents from '../hexpansions.json';
import { hexpansions_file } from '../src/hexpansion_schema';
import assert from 'node:assert';

assert(Array.isArray(hexpansions_contents), "hexpansions must be an array");

const hexpansions = hexpansions_file.parse(hexpansions_contents);

const names = hexpansions.map(({unique_name}) => unique_name);

assert(names.length === new Set(names).size, "Your hexpansion name is already in use")