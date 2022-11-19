export interface IPost {
  id: number;
  city: string;
  district: string;
  dateTime: string;
  postCategory: "lost thing" | "lost people";
  description: string;
  details: string;
}

export interface IPostResponse {
  content: IPost[];
  pageNumber: number;
  total: number;
  totalPages: number;
}
