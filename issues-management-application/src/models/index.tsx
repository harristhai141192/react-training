export interface IComment {
  comment?: string;
  commentTime?: string;
}

export interface IUser {
  login?: string;
  avatar_url?: string;
  node_id?: string;
}
export class IssueModel {
  number?: string; // id
  title?: string; //issueName
  user?: IUser;
  locked?: boolean;
  created_at?: string;
  onChangeChecked?: () => void;
  body?: string;
  issueComment?: IComment[];

  constructor(issue: IssueModel) {
    this.number = issue.number;
  }
}
