export interface FeedbackCreateData{
    type: string;
    comment: string;
    screeshot?: string;
}

export interface FeedbacksRepository{
    create:(data:FeedbackCreateData) => Promise<void>;
}