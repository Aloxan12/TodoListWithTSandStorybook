import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleId',
    async (
        articleId,
        thunkApi,
    ) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
