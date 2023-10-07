import { UI } from '@/components/ui';
import { Hash, Loader2, Lock, Plus, X } from 'lucide-react';
import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ask_gpt } from '@/lib/gpt';

const formSchema = z.object({
    question: z
            .string()
            .min(2, { message: 'Name must be at least 2 characters.' }),
});

const requiredFormSchema = formSchema.required({
    question: true,
});

interface Props {
    className?: string;
}

export const CreateNewQuestionGPT = ({ className }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const [response, setResponse] = useState("");

    const form = useForm<z.infer<typeof requiredFormSchema>>({
        resolver: zodResolver(requiredFormSchema),
        defaultValues: {
            question: '',
        },
    });

    const handleSubmitCreateChannel: SubmitHandler<
        z.infer<typeof requiredFormSchema>
    > = async (values) => {

        const { question } = values;

        setIsLoading(true);

        // Ask GPT
        let gpt_response = await ask_gpt(question);
        
        setResponse(gpt_response);
        setIsLoading(false);
        setIsDone(true);
    };

    return (
        <UI.Form {...form}>
            <form
                className="flex flex-col gap-4"
                onSubmit={form.handleSubmit(
                    handleSubmitCreateChannel
                )}
            >
                <UI.FormField
                    control={form.control}
                    name="question"
                    render={({ field }) => (
                        <UI.FormItem>
                            <div className="flex flex-col gap-2">
                                <UI.FormLabel>
                                    Question
                                </UI.FormLabel>
                                <UI.FormControl>
                                    <UI.Textarea
                                        rows={5}
                                        className="resize-none"
                                        {...field}
                                    />
                                </UI.FormControl>
                            </div>
                            <UI.FormMessage />
                        </UI.FormItem>
                    )}
                />

                <UI.Button
                    className="gap-2"
                    type="submit"
                    disabled={isLoading || isDone}
                >
                    {isLoading && (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    )}
                    Ask GPT
                </UI.Button>

                {isDone && (
                    <UI.FormField
                    control={form.control}
                    name="question"
                    render={({ field }) => (
                        <UI.FormItem>
                            <div className="flex flex-col gap-2">
                                <UI.FormLabel>
                                    Response
                                </UI.FormLabel>
                                
                                {response}
                                
                            </div>
                            <UI.FormMessage />
                        </UI.FormItem>
                    )}
                />
                )}
            </form>
        </UI.Form>
    );
};
