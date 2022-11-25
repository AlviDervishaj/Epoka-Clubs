export type ApiCodeTypes = AuthErrorApiCodeTypes | SuccessApiCodeTypes | ServerErrorApiCodeTypes;

type AuthErrorApiCodeTypes = 'auth/user-does-not-exist' | 'auth/incorrect-password' | 'auth/incorrect-email';
type ServerErrorApiCodeTypes = 'server/error';
type SuccessApiCodeTypes = 'auth/success';
