/*
 * The following are the labels we have deemed should be searched for.
 */
const goodLabels = ["contributions welcome", "contributions: up for grabs", "contributions: up for grabs!", "help needed", "help wanted", "easy"];
const badLabels = ["in progress", "claimed", "contributions: claimed"];

export function parseOpenIssues(issues) {
  let suggestedIssues = [];
  let openIssues = [];

  issues.forEach((issue) => {
    if(suggested(issue)) {
      suggestedIssues.push(issue);
    } else {
      openIssues.push(issue);
    }
  });

  return {
    openIssues: openIssues,
    suggestedIssues: suggestedIssues
  }
}

export function suggested(issue) {
  if(issue.labels.length === 0) {
    return false;
  } else {
    let suggestedIssue = false;
    let badIssue = false;

    issue.labels.forEach((label) => {
      if(badLabels.includes(label.name)) badIssue = true;
      if(goodLabels.includes(label.name.toLowerCase())) suggestedIssue = true;
    });
    return badIssue ? false : suggestedIssue;
  }
}
