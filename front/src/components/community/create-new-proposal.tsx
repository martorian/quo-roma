import { UI } from '@/components/ui';
import { Hash, Loader2, Lock, Plus, X } from 'lucide-react';
import { useState } from 'react';
import {
    useAccount,
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
} from 'wagmi';
import ChannelABI from '@/abis/channel';

import { contractsConfig } from '@/config/contracts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { polygonMumbai } from 'viem/chains';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';

const formSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters.' })
        .toLowerCase(),
    about: z.string(),
    hasFees: z.boolean(),
    fees: z.number().min(0, { message: 'Fees must be positive or zero.' }),
});

const requiredFormSchema = formSchema.required({
    name: true,
    fees: true,
});

interface Props {
    className?: string;
}

export const CreateNewProposal = ({ className }: Props) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [hasFees, setHasFees] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof requiredFormSchema>>({
        resolver: zodResolver(requiredFormSchema),
        defaultValues: {
            name: '',
            description: '',
        },
    });

    const handleSubmitCreateChannel: SubmitHandler<
        z.infer<typeof requiredFormSchema>
    > = async (values) => {
        const { name, about, fees } = values;
        setIsLoading(true);

        console.log('name', name);
        console.log('about', about);
        console.log('fees', fees);
    };

    const handleModalCreateNewProposal = () => {
        // Need to be replaced by checking ownership.
        setModalOpened(true);
    };

    return (
        <>
            <UI.AlertDialog
                open={modalOpened}
                onOpenChange={setModalOpened}
            >
                <UI.AlertDialogContent className="sm:max-w-[425px]">
                    <UI.AlertDialogCancel className="absolute p-0 top-2 right-2 border-none w-8 h-8 flex items-center justify-center">
                        <X className="w-4 h-4" />
                        <span className="sr-only">Close</span>
                    </UI.AlertDialogCancel>
                    <UI.AlertDialogHeader>
                        <UI.AlertDialogTitle>
                            Create new proposal
                        </UI.AlertDialogTitle>
                        <UI.AlertDialogDescription>
                            Describe your proposal to the community.
                        </UI.AlertDialogDescription>
                    </UI.AlertDialogHeader>

                    <UI.Form {...form}>
                        <form
                            className="flex flex-col gap-4"
                            onSubmit={form.handleSubmit(
                                handleSubmitCreateChannel
                            )}
                        >
                            <UI.FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <UI.FormItem>
                                        <div className="flex flex-col gap-2">
                                            <UI.FormLabel>Title</UI.FormLabel>
                                            <UI.FormControl>
                                                <UI.Input {...field} />
                                            </UI.FormControl>
                                        </div>
                                        <UI.FormMessage />
                                    </UI.FormItem>
                                )}
                            />

                            <UI.FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <UI.FormItem>
                                        <div className="flex flex-col gap-2">
                                            <UI.FormLabel>
                                                Description
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

                            <UI.AlertDialogFooter>
                                <UI.Button
                                    className="gap-2"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading && (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    )}
                                    Submit
                                </UI.Button>
                            </UI.AlertDialogFooter>
                        </form>
                    </UI.Form>
                </UI.AlertDialogContent>
            </UI.AlertDialog>
            <UI.Button
                onClick={handleModalCreateNewProposal}
                // variant="outline"
                className={cn('gap-2', className)}
            >
                <Plus className="w-4 h-4 opacity-50" />
                Create new proposal
            </UI.Button>
        </>
    );
};
