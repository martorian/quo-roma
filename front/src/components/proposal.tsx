import {UI} from '@/components/ui';
import {ThumbsUp, ThumbsDown, X} from "lucide-react";
import {useState} from "react";

const MAX_CHARACTERS_DESCRIPTION = 140;

interface Vote {
    id: number;
    value: number;
}

interface Proposal {
    id: number;
    title: string;
    description: string;
    votes: Vote[];
}

interface Props {
    proposal: Proposal;
}

export function Proposal({proposal}: Props) {
    const yesVotes = proposal.votes.filter(vote => vote.value === 1).length;
    const noVotes = proposal.votes.filter(vote => vote.value === -1).length;
    const [votes, setVotes] = useState<Array<Vote>>(proposal.votes);
    const [descriptionModalOpened, setDescriptionModalOpened] = useState<Array<Vote>>(proposal.votes);

    const totalVotes = votes.length;

    const voteUp = () => {
        setVotes([...votes, {id: votes.length + 1, value: 1}])
    }

    const voteDown = () => {
        setVotes([...votes, {id: votes.length + 1, value: -1}])
    }

    const handleModalCreateNewChannel = () => {
        setDescriptionModalOpened(true);
    }

    return (
        <UI.Card className="w-full">
            <UI.CardHeader className="flex flex-row items-center gap-4 -my-3 space-y-0">
                <div className="flex flex-col items-center gap-0">
                    <UI.Button
                        onClick={voteUp}
                        variant="link"
                        size="icon"
                        className="rounded-full transition focus-visible:bg-green-500 focus-visible:text-white hover:bg-green-500 hover:text-white hover:scale-[1.1]"
                    >
                        <ThumbsUp className="h-4 w-4"/>
                    </UI.Button>
                    <span className="w-full flex items-center justify-center">{totalVotes}</span>
                    <UI.Button
                        onClick={voteDown}
                        variant="link"
                        size="icon"
                        className="rounded-full transition focus-visible:bg-red-500 focus-visible:text-white hover:bg-red-500 hover:text-white hover:scale-[1.1]"
                    >
                        <ThumbsDown className="h-4 w-4"/>
                    </UI.Button>
                </div>
                <div className="w-4 h-full flex flex-col">
                    <div className="block bg-green-500 w-full" style={{height: `${yesVotes / totalVotes}%`}} />
                    <div className="block bg-red-500 w-full" style={{height: `${noVotes / totalVotes}%`}} />
                </div>
                <div className="flex flex-col items-start gap-1">
                    <UI.CardTitle className="text-lg">{proposal.title}</UI.CardTitle>
                    <UI.CardDescription>
                        {proposal.description.slice(0, MAX_CHARACTERS_DESCRIPTION)}
                        {proposal.description.length > MAX_CHARACTERS_DESCRIPTION && '...'}
                    </UI.CardDescription>
                    {proposal.description.length > MAX_CHARACTERS_DESCRIPTION && (
                        <>
                            <UI.AlertDialog
                                open={descriptionModalOpened}
                                onOpenChange={setDescriptionModalOpened}
                            >
                                <UI.AlertDialogContent className="sm:max-w-2/3">
                                    <UI.AlertDialogCancel
                                        className="absolute p-0 top-2 right-2 border-none w-8 h-8 flex items-center justify-center">
                                        <X className="w-4 h-4"/>
                                        <span className="sr-only">Close</span>
                                    </UI.AlertDialogCancel>
                                    <UI.AlertDialogHeader>
                                        <UI.AlertDialogTitle>
                                            {proposal.title}
                                        </UI.AlertDialogTitle>
                                        <UI.AlertDialogDescription>
                                            {proposal.description}
                                        </UI.AlertDialogDescription>
                                    </UI.AlertDialogHeader>
                                </UI.AlertDialogContent>
                            </UI.AlertDialog>
                            <UI.Button
                                onClick={handleModalCreateNewChannel}
                                variant="link"
                                className="-mx-4"
                            >
                                {/*<Plus className="w-4 h-4 opacity-50"/>*/}
                                Read more
                            </UI.Button>
                        </>
                    )}
                </div>
            </UI.CardHeader>
        </UI.Card>
    )
}
