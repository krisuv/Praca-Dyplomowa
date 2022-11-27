
export type TTag = 'party' | 'uni' | 'edu' | 'help' | 'job' | 'event' | 'sponsored' | 'other';

export interface ITag {
  name: TTag;
  color: string;
}

export interface IComment {
  id: string;
  userName: string;
  content: string;
}

export interface IPost extends IComment {
  avatar: string;
  tag: TTag;
  publishTime: string;
  reactions: number;
  comments: IComment[];
}