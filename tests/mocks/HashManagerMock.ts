

export class HashManagerMock {
    public hash (text: string) {
        return "hash"
    }

    public compare(text: string, hash: string) {
        return text === hash
    }
}