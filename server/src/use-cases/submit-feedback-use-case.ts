import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screeshot?: string;
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbackRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ) { }

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screeshot } = request;

        if(!comment){
            throw new Error('Type is required.')
        }

        if(!type){
            throw new Error('Type is required.')
        }

        if (screeshot && !screeshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot format.')
        }

        await this.feedbackRepository.create({
            type,
            comment,
            screeshot,
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
                `<p>Tipo de feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`,
            ].join('\n')
        })
    }
}