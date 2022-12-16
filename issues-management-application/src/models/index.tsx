interface comment {
  comment?: string;
  commentTime?: string;
}
export class IssueModel {
  issueId: string;
  issueName?: string;
  issueAuthorImage?: string;
  issueStatus?: boolean;
  issueCreatedTime?: string;
  issueAuthor?: string;
  onChangeChecked?: () => void;
  issueComment?: comment[];

  constructor(issue: IssueModel) {
    this.issueId = issue.issueId;
  }
}
