'use strict';

var path = require('path');
var util = require('util');
var fs = require('fs-extra');
var isObject = require('is-plain-object');
var globby = require('globby');
var colorette = require('colorette');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var util__default = /*#__PURE__*/_interopDefaultLegacy(util);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var isObject__default = /*#__PURE__*/_interopDefaultLegacy(isObject);
var globby__default = /*#__PURE__*/_interopDefaultLegacy(globby);

function stringify(value) {
  return util__default["default"].inspect(value, {
    breakLength: Infinity
  });
}

async function isFile(filePath) {
  const fileStats = await fs__default["default"].stat(filePath);
  return fileStats.isFile();
}

function renameTarget(target, rename, src) {
  const parsedPath = path__default["default"].parse(target);
  return typeof rename === 'string' ? rename : rename(parsedPath.name, parsedPath.ext.replace('.', ''), src);
}

async function generateCopyTarget(src, dest, {
  flatten,
  rename,
  transform
}) {
  if (transform && !(await isFile(src))) {
    throw new Error(`"transform" option works only on files: '${src}' must be a file`);
  }

  const {
    base,
    dir
  } = path__default["default"].parse(src);
  const destinationFolder = flatten || !flatten && !dir ? dest : dir.replace(dir.split('/')[0], dest);
  return {
    src,
    dest: path__default["default"].join(destinationFolder, rename ? renameTarget(base, rename, src) : base),
    ...(transform && {
      contents: await transform(await fs__default["default"].readFile(src), base)
    }),
    renamed: rename,
    transformed: transform
  };
}

function copy(options = {}) {
  const {
    copyOnce = false,
    copySync = false,
    flatten = true,
    hook = 'buildEnd',
    targets = [],
    verbose = false,
    ...restPluginOptions
  } = options;
  let copied = false;
  return {
    name: 'copy',
    [hook]: async () => {
      if (copyOnce && copied) {
        return;
      }

      const copyTargets = [];

      if (Array.isArray(targets) && targets.length) {
        for (const target of targets) {
          if (!isObject__default["default"](target)) {
            throw new Error(`${stringify(target)} target must be an object`);
          }

          const {
            dest,
            rename,
            src,
            transform,
            ...restTargetOptions
          } = target;

          if (!src || !dest) {
            throw new Error(`${stringify(target)} target must have "src" and "dest" properties`);
          }

          if (rename && typeof rename !== 'string' && typeof rename !== 'function') {
            throw new Error(`${stringify(target)} target's "rename" property must be a string or a function`);
          }

          const matchedPaths = await globby__default["default"](src, {
            expandDirectories: false,
            onlyFiles: false,
            ...restPluginOptions,
            ...restTargetOptions
          });

          if (matchedPaths.length) {
            for (const matchedPath of matchedPaths) {
              const generatedCopyTargets = Array.isArray(dest) ? await Promise.all(dest.map(destination => generateCopyTarget(matchedPath, destination, {
                flatten,
                rename,
                transform
              }))) : [await generateCopyTarget(matchedPath, dest, {
                flatten,
                rename,
                transform
              })];
              copyTargets.push(...generatedCopyTargets);
            }
          }
        }
      }

      if (copyTargets.length) {
        if (verbose) {
          console.log(colorette.green('copied:'));
        }

        for (const copyTarget of copyTargets) {
          const {
            contents,
            dest,
            src,
            transformed
          } = copyTarget;

          if (transformed) {
            await fs__default["default"].outputFile(dest, contents, restPluginOptions);
          } else if (!copySync) {
            await fs__default["default"].copy(src, dest, restPluginOptions);
          } else {
            fs__default["default"].copySync(src, dest, restPluginOptions);
          }

          if (verbose) {
            let message = colorette.green(`  ${colorette.bold(src)} → ${colorette.bold(dest)}`);
            const flags = Object.entries(copyTarget).filter(([key, value]) => ['renamed', 'transformed'].includes(key) && value).map(([key]) => key.charAt(0).toUpperCase());

            if (flags.length) {
              message = `${message} ${colorette.yellow(`[${flags.join(', ')}]`)}`;
            }

            console.log(message);
          }
        }
      } else if (verbose) {
        console.log(colorette.yellow('no items to copy'));
      }

      copied = true;
    }
  };
}

module.exports = copy;
