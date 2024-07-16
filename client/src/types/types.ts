export type Comment = {
    name: string,
    phone: string,
    comment: string,
    rating: number,
}

export interface CommentData extends Comment  {
    _id: string
    dateCreating: Date | string
}

export type CommentList = CommentData[]