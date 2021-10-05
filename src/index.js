// import { Context } from "@actions/github/lib/context";
import GitHub from "@actions/github";
// import core from "@actions/core";
// import { context } from "@actions/github/lib/utils";

// Read the paths and remove trailing '/'
// const outDir = core.getInput('outDir', { required: true }).replace(/\/+$/g, "")

console.log(JSON.stringify(GitHub.context))