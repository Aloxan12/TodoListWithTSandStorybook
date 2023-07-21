export interface LoginSchema {
    username: string
    password: string
    isLoading: boolean
    // rememberMe: string
    error?: string
}
