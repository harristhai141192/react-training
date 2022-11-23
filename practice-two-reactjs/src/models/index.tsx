export class Member {
  id?: string;
  memberName?: string;
  memberSince?: string;
  dateOfBirth?: string;
  memberImg?: string;
  gender?: string;
  job?: string;
  description?: string;
  phone?: string;
  email?: string;

  constructor(member: Member) {
    this.id = member.id;
  }
}
