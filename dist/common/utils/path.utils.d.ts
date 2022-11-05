export declare function removeSlashAtBeginning(path: string): string;
export declare function removeSlashAtEnd(path: string): string;
declare global {
    interface String {
        removeSlashAtBeginning(): string;
        removeSlashAtEnd(): string;
    }
}
