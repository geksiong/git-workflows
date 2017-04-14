function createGitGraphAt(elementId) {
  return new GitGraph({
    template: graphConfig,
    mode: "compact",
    orientation: "vertical",
    elementId: elementId
  });
}

var graphConfig = new GitGraph.Template({
  colors: [
    "#4ED1A1", // feature track 1
    "#4ED1A1", // feature track 2
    "#B18BE8", // develop
    "#4CD3D6", // release
    "#FC8363", // support
    "#B3E3FF" // master
  ],
  branch: {
    color: "#aaa",
    lineWidth: 4,
    spacingX: 60,
    mergeStyle: "bezier",
    showLabel: true, // display branch names on graph
    labelFont: "normal 10pt Lato, Arial",
    labelRotation: 0
  },
  commit: {
    spacingY: -30,
    dot: {
      size: 8,
      strokeColor: "#000000",
      strokeWidth: 4
    },
    tag: {
      font: "normal 10pt Lato, Arial",
      color: "yellow"
    },
    message: {
      color: "black",
      font: "normal 12pt Lato, Arial",
      displayAuthor: false,
      displayBranch: false,
      displayHash: false,
    },
    tooltipHTMLFormatter: function(commit) {
      var tooltip = commit.sha1;
      if (commit.message != "He doesn't like George Michael! Boooo!") {
        tooltip += ": " + commit.message;
      }
      return tooltip;
    }
  },
  arrow: {
    size: 0,
    offset: 3
  }
});

var bugFixCommit = {
  messageAuthorDisplay: false,
  messageBranchDisplay: false,
  messageHashDisplay: false,
  message: "Bug fix commit(s)"
};

var stabilizationCommit = {
  messageAuthorDisplay: false,
  messageBranchDisplay: false,
  messageHashDisplay: false,
  message: "Release stabilization commit(s)"
};

var candidateReleaseTag = function(version) {
  return {
    message: "Start " + version + " Release Candidate builds",
    tag: version,
    tagColor: "#EEE"
  }
}

var finalReleaseTag = function(version) {
  return {
    dotStrokeWidth: 10,
    message: "Release " + version + " tagged",
    tag: version
  }
}

// You can manually fix columns to control the display.
var featureCol2 = 0;
var featureCol = 1;
var developCol = 2;
var releaseCol = 3;
var supportCol = 4;
var masterCol = 5;
