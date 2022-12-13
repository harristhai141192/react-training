export class IssueModel {
  issueId: string;
  issueName?: string;
  issueStatus?: boolean;
  issueCreatedTime?: string;
  issueAuthor?: string;
  onChangeChecked?: () => void;

  constructor(issue: IssueModel) {
    this.issueId = issue.issueId;
  }
}
