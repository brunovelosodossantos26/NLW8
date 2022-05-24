import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMail: sendMailSpy}
)


describe('Submit feeback', ()=>{
    it('shout be able to submit a feedback', async () =>{
        await expect(submitFeedback.execute({
            type:'BUG',
            comment:'example comment',
            screeshot: 'data:image/png;base64,jfjfjfjfj',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })

    it('shout be able to submit a feedback', async () =>{
        await expect(submitFeedback.execute({
            type:'',
            comment:'example comment',
            screeshot: 'data:image/png;base64,jfjfjfjfj',
        })).rejects.toThrow();
    })

    it('shout be able to submit a feedback', async () =>{
        await expect(submitFeedback.execute({
            type:'BUG',
            comment:'',
            screeshot: 'data:image/png;base64,jfjfjfjfj',
        })).rejects.toThrow();
    })

    it('shout be able to submit a feedback', async () =>{
        await expect(submitFeedback.execute({
            type:'BUG',
            comment:'example comment',
            screeshot: '123',
        })).rejects.toThrow();
    })
});
