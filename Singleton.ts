class Singleton{
    private static m_instance: Singleton
    private constructor(){}
    public static getInstance(): Singleton{
        if (Singleton.m_instance == null){
            return new Singleton()
        }
        return Singleton.m_instance
    }

    public print(): void {
        console.log("Success")
    }
}