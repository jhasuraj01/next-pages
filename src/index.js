// import { Context } from "@actions/github/lib/context";
// import { context } from "@actions/github";
const exec = require('@actions/exec');
// import core from "@actions/core";
// import { context } from "@actions/github/lib/utils";

// Read the paths and remove trailing '/'
// const outDir = core.getInput('outDir', { required: true }).replace(/\/+$/g, "")

// console.log(JSON.stringify(context, null, 4))
const main = async () => {
    await exec.exec('git checkout -B gh-pages');
    await exec.exec('npx next build');
    await exec.exec('npx next export');
    await exec.exec('git filter-branch -f --prune-empty --subdirectory-filter out/ gh-pages');
    await exec.exec('touch .nojekyll');
    await exec.exec('ls');
    await exec.exec('git config --global user.name "Anorcle"');
    await exec.exec('git config --global user.email "next-pages@anorcle.com"');
    await exec.exec('git add .');
    await exec.exec('git commit -m "Test"');
    await exec.exec('git push origin gh-pages');
}

main()