export interface IAuthLogin {
    email: string,
    password: string
}
export interface IAuthRegister {
    displayName: string,
    email: string,
    password: string,
}

export interface IAuthSave {
    displayName: string,
    email: string,
    photoURL: string,
    emailVerified?: boolean,
    id: string,
    tokenId: string,
    logged: boolean,
    loginWithGG?: boolean
}

export type NotificationType = 'success' | 'info' | 'warning' | 'error';