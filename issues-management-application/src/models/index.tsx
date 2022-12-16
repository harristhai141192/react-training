export interface IComment {
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
  issueComment?: IComment[];

  constructor(issue: IssueModel) {
    this.issueId = issue.issueId;
  }
}
