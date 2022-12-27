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
  number: string; // id
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
  }
}

export interface ILockReason {
  lockReason: string;
}
