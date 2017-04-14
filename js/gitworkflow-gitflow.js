function createGitFlow() {
  var gitgraph = createGitGraphAt("gitGraph-gitflow");

  var master = gitgraph.branch({
    name: "master",
    column: masterCol,
    color: "#070",
    lineWidth: 5
  });
  master.commit("Initial commit");

  var develop = gitgraph.branch({
    parentBranch: master,
    name: "develop",
    column: developCol,
    color: "#970",
    lineWidth: 5
  });
  develop.commit();

  var feature1 = gitgraph.branch({
    parentBranch: develop,
    name: "feature-1",
    column: featureCol
  });
  feature1.commit("A feature to go into v1.0.0")
    .commit()
    .merge(develop);

  var feature2 = gitgraph.branch({
    parentBranch: develop,
    name: "feature-2",
    column: featureCol
  });
  feature2.commit("Another feature to go into v1.0.0");

  var feature_complicated1 = gitgraph.branch({
    parentBranch: develop,
    name: "complicated-feature",
    column: featureCol2
  });
  feature_complicated1.commit("This was supposed to go into v1.0.0...")

  feature2.commit()
    .merge(develop);

  feature_complicated1.commit("But it missed the release...")
    .commit();

  var release_100 = gitgraph.branch({
    parentBranch: develop,
    name: "release-1.0.0",
    column: releaseCol
  });
  release_100.commit(candidateReleaseTag("v1.0.0-rc1"));
  develop.commit();
  release_100.commit()
    .commit(stabilizationCommit)
    .tag(candidateReleaseTag("v1.0.0-rc2"))
    .merge(develop)
    .merge(master, finalReleaseTag("v1.0.0"));

  feature_complicated1.commit("Still in development...")
    .commit();

  var support_101 = gitgraph.branch({
    parentBranch: master,
    name: "hotfix-1.0.1",
    column: supportCol
  });
  support_101.commit(bugFixCommit)
    .commit(candidateReleaseTag("v1.0.1-rc1"))

  var feature3 = gitgraph.branch({
    parentBranch: develop,
    name: "feature-3",
    column: featureCol
  });
  develop.commit();
  feature3.commit("A feature to go into v1.1.0")
    .commit()
    .merge(develop);

  support_101.merge(develop)
    .merge(master, finalReleaseTag("v1.0.1"));

  develop.commit();

  feature_complicated1.commit("Finally completed!")
    .merge(develop);

  var support_102 = gitgraph.branch({
    parentBranch: master,
    name: "hotfix-1.0.2",
    column: supportCol
  });
  support_102.commit(candidateReleaseTag("v1.0.2-rc"))
    .commit(bugFixCommit)
    .merge(master, finalReleaseTag("v1.0.2"))
    .merge(develop);
  develop.commit();

  var release_110 = gitgraph.branch({
    parentBranch: develop,
    name: "release-1.1.0",
    column: releaseCol
  });
  release_110.commit(candidateReleaseTag("v1.1.0-rc"))
    .commit(stabilizationCommit);

  develop.commit()
    .commit();

  var support_111 = gitgraph.branch({
    parentBranch: master,
    name: "hotfix-1.1.1",
    column: supportCol
  });
  support_111.commit(candidateReleaseTag("v1.1.1-rc"))
    .commit(bugFixCommit)
    .merge(master, finalReleaseTag("v1.1.1"))
    .merge(release_110)
    .merge(develop);
  develop.commit();

  release_110.commit()
    .commit()
    .merge(master, finalReleaseTag("v1.1.0"))
    .merge(develop);

  var feature4 = gitgraph.branch({
    parentBranch: develop,
    name: "feature-4",
    column: featureCol
  });
  develop.commit();
  feature4.commit("A feature to go into v1.2.0")
    .commit()
    .merge(develop);

  var feature5 = gitgraph.branch({
    parentBranch: develop,
    name: "feature-5",
    column: featureCol
  });
  develop.commit();
  feature5.commit("Another feature to go into v1.2.0");

  var support_112 = gitgraph.branch({
    parentBranch: master,
    name: "hotfix-1.1.2",
    column: supportCol
  });
  support_112.commit(candidateReleaseTag("v1.1.2-rc"))
    .commit(bugFixCommit)
    .merge(master, finalReleaseTag("v1.1.2"))
    .merge(develop);
  develop.commit();

  feature5.commit()
    .merge(develop);

  var support_113 = gitgraph.branch({
    parentBranch: master,
    name: "hotfix-1.1.3",
    column: supportCol
  });
  support_113.commit(candidateReleaseTag("v1.1.3-rc"))
    .commit(bugFixCommit)
    .merge(master, finalReleaseTag("v1.1.3"))
    .merge(develop);
  develop.commit();

  var release_120 = gitgraph.branch({
    parentBranch: develop,
    name: "release-1.2.0",
    column: releaseCol
  });
  release_120.commit(candidateReleaseTag("v1.2.0-rc"))
    .commit(stabilizationCommit)
    .merge(master, finalReleaseTag("v1.2.0"))
    .merge(develop);
  develop.commit();
}
