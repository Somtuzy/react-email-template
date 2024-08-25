import { render } from "@react-email/components";
import { type ITemplateProps, default as BaseTemplate } from "./BaseTemplate";

export interface IContent { 
    message: string | string[];
    [key: string]: string | number | string[]
}

function processMessagesIntoParagraphs(content: IContent) {
    if(typeof content.message === 'string') return [content.message]
    return content.message
}

export function renderEmailTemplateToHTML(content: IContent) {
    content.message = processMessagesIntoParagraphs(content)
    return render(BaseTemplate(content as ITemplateProps))
}