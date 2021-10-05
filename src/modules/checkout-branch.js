export async function createBranch(github, context, branch) {

    const toolkit = new github(githubToken());
    let branchExists;
    // Sometimes branch might come in with refs/heads already
    branch = branch.replace('refs/heads/', '');

    // throws HttpError if branch already exists.
    try {
        await toolkit.repos.getBranch({
            ...context.repo,
            branch
        })

        branchExists = true;
    } catch (error) {
        if (error.name === 'HttpError' && error.status === 404) {
            await toolkit.git.createRef({
                ref: `refs/heads/${branch}`,
                sha: context.sha,
                ...context.repo
            })
        } else {
            throw Error(error)
        }
    }
}