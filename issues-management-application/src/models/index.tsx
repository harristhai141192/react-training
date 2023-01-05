export interface IComment {
  body?: string;
  created_at?: string;
  user?: IUser;
}

export interface IUser {
  login?: string;
  avatar_url?: string;
  avatar_alt?: string;
  node_id?: string;
}
export class IssueModel {
  number: number; // id
  title: string; //issueName
  user?: IUser;
  locked?: boolean;
  active_lock_reason?: string;
  created_at?: string;
  onChangeChecked?: () => void;
  body?: string;
  issueComment?: IComment[];

  constructor(issue: IssueModel) {
    this.number = issue.number;
    this.title = issue.title;
    this.user = issue.user;
    this.locked = issue.locked;
    this.active_lock_reason = issue.active_lock_reason;
    this.created_at = issue.created_at;
    this.onChangeChecked = issue.onChangeChecked;
    this.body = issue.body;
    this.issueComment = issue.issueComment;
  }
}

export interface ILockReason {
  lockReason: string;
}
