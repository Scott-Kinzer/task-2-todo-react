export type NOTE_CATEGORIES = "task" | "idea" | "thought" | "quote";

export type Note = {
    id: string;
    name: string;
    created: Date;
    category: NOTE_CATEGORIES,
    content: string,
    isArchive: boolean
};
