import {hexpansions} from '../hexpansion_schema';

export async function GET() {
    return new Response(JSON.stringify(hexpansions, null, 2))
}