import axios from "axios"
import { baseURLApi } from "../utils/utils"
import { Comment, CommentList } from "../types/types"

export const $api = axios.create({
    baseURL: `${baseURLApi}/api`,
})

export class COMMENTSHTTP {
    static async getComments(): Promise<CommentList> {
        const comments = await $api.get(`comments/get-comments`)
        return comments.data
    }

    static async addComment(dto: Comment): Promise<Comment> {
        const comment = await $api.post(`comments/add-comment`, dto)
        return comment.data
    }
}
export class NOTIFICATIONHTTP {
    static async sendMessage(dto:{
            city:string,
            name:string,
            phone:string,
            comment?:string,
        }): Promise<void> {
        await $api.post(`notification/send-message`,dto)
    }
}
