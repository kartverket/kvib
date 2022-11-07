import StyleDictionaryFactory from "style-dictionary";
import config from "../config";
import { cjsModuleFormatter } from "./formatters/typescript/cjs-module";
import { esModuleFormatter } from "./formatters/typescript/es-module";
import { typescriptTypingsFormatter } from "./formatters/typescript/typings";
import { pxTransformer } from "./transforms/size/px";
import { pxToRemTransformer } from "./transforms/size/pxToRem";

const styleDictionary = StyleDictionaryFactory.extend(config);

// Register formatters
// Read about formatters @ https://amzn.github.io/style-dictionary/#/formats
styleDictionary.registerFormat(cjsModuleFormatter);
styleDictionary.registerFormat(esModuleFormatter);
styleDictionary.registerFormat(typescriptTypingsFormatter);

// Register transforms
// Read about transforms @ https://amzn.github.io/style-dictionary/#/transforms
styleDictionary.registerTransform(pxTransformer);
styleDictionary.registerTransform(pxToRemTransformer);

styleDictionary.buildAllPlatforms();
