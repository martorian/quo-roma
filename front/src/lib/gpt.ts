'use client';

import OpenAI from "openai";

export async function ask_gpt(user_message: string): string {

    const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "system", content: user_message }],
        model: "gpt-3.5-turbo",
    });

    console.log(chatCompletion);

    return chatCompletion.choices[0].message.content || "";
}