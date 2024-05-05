import { defineConfig } from 'tsup';
import pkg from './package.json';
import builtinModules from 'builtin-modules';

export default defineConfig({
    entry: [
        'src/index.ts',
        'src/helpers.ts'
    ],
    splitting: false,
    sourcemap: 'inline',
    clean: false,
    format: 'esm',
    outDir: 'dist',
    treeshake: true,
    bundle: true,
    minify: true,
    external: ['alt-client',
        'rxjs/operators',
        ...builtinModules,
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),],
    noExternal: Object.keys(pkg.devDependencies),
});
