import { NOTE_CATEGORIES, Note } from "../types/noteTypes";

export type NoteStats = {
    archive?: number;
    active?: number
}

export type NoteStatsResult = {
    archive?: number;
    active?: number;
    categoryType: NOTE_CATEGORIES;
}

type AccNote = Record<NOTE_CATEGORIES, NoteStats>;

export const filterNotes = (notesCopy: Note[]): NoteStatsResult[] => {
    const objectOfNotes =  notesCopy.reduce((acc, item) => {
        if (item.isArchive) {
            return {
                ...acc,
                [item.category]: {
                    ...acc[item.category],
                    archive: acc[item.category]?.archive ? acc[item.category]?.archive as number + 1 : 1,
                }
            }
        } else {
            // Active
            return {
                ...acc,
                [item.category]: {
                    ...acc[item.category],
                    active: acc[item.category]?.active ? acc[item.category]?.active as number + 1 : 1,
                }
            }
        }

    }, {} as AccNote);

    const arrayOfNotes = [];

    for (const noteStats in objectOfNotes) {
        arrayOfNotes.push({...objectOfNotes[noteStats as NOTE_CATEGORIES], categoryType: noteStats as NOTE_CATEGORIES});
    }

    return arrayOfNotes;
};