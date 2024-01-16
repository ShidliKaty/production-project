export { userReducer, userActions } from './modal/slice/userSlice';
export {
    getUserInited,
} from './modal/selectors/getUserInited/getUserInited';
export { UserRole } from './modal/consts/consts';
export { getUserAuthData } from './modal/selectors/getUserAuthData/getUserAuthData';
export { isUserAdmin, isUserManager, getUserRoles } from './modal/selectors/roleSelectors';

export type { UserSchema, User } from './modal/types/user';
