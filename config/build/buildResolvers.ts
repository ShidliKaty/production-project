import { buildOptions } from './types/config';
import { ResolveOptions } from 'webpack';

export function buildResolvers(options: buildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
