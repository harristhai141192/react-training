import { IssueModel } from '@models/index';

export const issueData: IssueModel[] = [
  {
    issueId: '1',
    issueName: 'This is sample issue for testing',
    issueAuthor: 'Bao Thai',
    issueAuthorImage: '',
    issueCreatedTime: '12/12/2022',
    issueStatus: true,
    issueComment: [
      {
        comment:
          'A dog that was stucked at the peak of moutain for months has been rescued by a man',
        commentTime: '12/12/2022',
      },
      {
        comment: 'I dont care',
        commentTime: '11/11/2009',
      },
    ],
  },
  {
    issueId: '2',
    issueName: 'This is sample issue for testing',
    issueAuthor: 'Bao Thai',
    issueCreatedTime: '12/12/2022',
    issueStatus: true,
    issueComment: [
      {
        comment: 'I dont care',
        commentTime: '11/11/2009',
      },
    ],
  },
  {
    issueId: '3',
    issueName: 'This is sample issue for testing',
    issueAuthor: 'Bao Thai',
    issueCreatedTime: '12/12/2022',
    issueStatus: true,
    issueComment: [
      {
        comment: 'Stuck in my head',
        commentTime: '05/07/2021',
      },
    ],
  },
  {
    issueId: '4',
    issueName: 'This is sample issue for testing',
    issueAuthor: 'Bao Thai',
    issueCreatedTime: '12/12/2022',
    issueStatus: false,
    issueComment: [
      {
        comment: 'Where is the god?',
        commentTime: '12/12/1999',
      },
    ],
  },
];
