export type SkillState = 'completed' | 'retry' | 'doing' | 'unlocked' | 'locked';
import { QuizTrail } from "@/types/TreeSkill";

export interface SkillNode {
    id?: string;          // empty when the quiz doesn’t exist yet
    subject: string;      // “Mixité sexuée”, “Adolescence”, …
    level: number;       // 1, 2, or 3
    state: SkillState;
}

/**
 * Build a fixed-width matrix (subjects × 3 levels).
 *   • The *first* node of every subject is at least “unlocked”.
 *   • A node is “locked” unless it exists *or* the level-1 node is unlocked.
 */
export function buildSkillTree(quizzes: QuizTrail[]): Record<string, SkillNode[]> {
    const groups: Record<string, SkillNode[]> = {};

    quizzes.forEach(q => {
        groups[q.name] ??= [];
        groups[q.name][q.level - 1] = { id: q.id, subject: q.name, level: q.level, state: q.state };
    });

    // ensure we always have 3 levels → fill the gaps
    Object.entries(groups).forEach(([subject, list]) => {
        for (let i = 0; i < 3; i += 1) {
            if (!list[i]) list[i] = { subject, level: i + 1, state: 'locked' };
        }

        // rule: first node is always at least “unlocked”
        if (list[0].state === 'locked') list[0].state = 'unlocked';

        // rule: a node unlocks once the previous one exists
        for (let i = 1; i < 3; i += 1) {
            if (list[i].state === 'locked' && list[i - 1].state !== 'locked')
                list[i].state = 'unlocked';
        }
    });

    return groups;
}
