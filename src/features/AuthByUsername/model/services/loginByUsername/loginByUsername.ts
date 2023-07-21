import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

interface LoginByUsernameProps {
    username: string
    password: string
}

const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios
                .post('http://localhost:8000/login', { username, password });
            return response.data;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
