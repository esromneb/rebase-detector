// const nodegit = require('node_modules/nodegit/dist/nodegit.js');
const nodegit = require('nodegit');
// import {nodegit} from 'nodegit';

export async function iterateBranches(path: string) {
  const repo = await nodegit.Repository.open(path); // Replace with the path to your Git repository
  const branches = await repo.getReferenceNames(nodegit.Reference.TYPE.ALL);

  for (let i = 0; i < branches.length; i++) {
    const branch = branches[i];
    const branchRef = await repo.getReference(branch);
    const branchName = nodegit.Branch.name(branchRef);

    console.log(`Iterating commits on branch ${branchName} ${branch}`);

    // const walker = nodegit.Revwalk.create(repo);
    // walker.sorting(nodegit.Revwalk.SORT.TIME);
    // walker.pushRef(branch);

    // let commit;
    // while ((commit = await walker.next()) !== null) {
    //   console.log(`Commit hash: ${commit.id().toString(nodegit.Oid.HEX)}`);
    // }
  }
}

iterateBranches('/home/x/work/DoubleRay');
