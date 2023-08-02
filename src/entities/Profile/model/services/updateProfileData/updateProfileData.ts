import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm, Profile } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const {
            extra,
            getState,
            rejectWithValue,
        } = thunkApi;
        const fromData = getProfileForm(getState());
        const error = validateProfileData(fromData);

        if (error.length) {
            return rejectWithValue(error);
        }

        try {
            const response = await extra.api.put<Profile>('/profile', fromData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
