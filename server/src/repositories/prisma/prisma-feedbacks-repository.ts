import {prisma} from "../../prisma"
import {FeedbackCreateData,FeedbacksRepository} from "../feedbacks-repository";

export class PrismaFeedbackRepository implements FeedbacksRepository {
 async create({type,comment, screeshot}: FeedbackCreateData){
    await prisma.feedback.create({
        data:{
            type,
            comment,
            screeshot,
        }
    })
 }
}